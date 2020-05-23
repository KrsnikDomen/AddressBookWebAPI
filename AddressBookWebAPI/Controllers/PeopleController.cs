using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AddressBookWebAPI.Models;

namespace AddressBookWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private readonly AddressBookDemoContext _context;
        private readonly int _totalPages;
        private readonly int _currentPage;

        public PeopleController(AddressBookDemoContext context)
        {
            _context = context;
        }

        // GET: api/People
        [HttpGet]
        public async Task<ActionResult<IEnumerable<People>>> GetPeople()
        {
            return await _context.People.ToListAsync();
        }

        // GET: api/People/5
        [HttpGet("{id:int}")]
        public async Task<ActionResult<People>> GetPeopleById(int id)
        {
            var people = await _context.People.FindAsync(id);

            if (people == null)
            {
                return NotFound();
            }

            return people;
        }

        // GET: api/People/FirstName/Bruce
        [HttpGet("firstname/{value}")]
        public async Task<ActionResult<IEnumerable<People>>> GetPeopleByFirstName(string value)
        {
            var person = await _context.People.Where(person => person.FirstName.Contains(value)).ToListAsync();

            if (person == null)
            {
                return NotFound();
            }

            return person;
        }

        // GET: api/People/LastName
        [HttpGet("lastname/{value}")]
        public async Task<ActionResult<IEnumerable<People>>> GetPeopleByLastName(string value)
        {
            var person = await _context.People.Where(person => person.LastName.Contains(value)).ToListAsync();

            if (person == null)
            {
                return NotFound();
            }

            return person;
        }

        // GET: api/People/Address
        [HttpGet("address/{value}")]
        public async Task<ActionResult<IEnumerable<People>>> GetPeopleByAddress(string value)
        {
            var person = await _context.People.Where(person => person.Address.Contains(value)).ToListAsync();

            if (person == null)
            {
                return NotFound();
            }

            return person;
        }

        // GET: api/People/phonenumber
        [HttpGet("phonenumber/{value}")]
        public async Task<ActionResult<IEnumerable<People>>> GetPeopleByPhoneNumber(string value)
        {
            var person = await _context.People.Where(person => person.PhoneNumber.Contains(value)).ToListAsync();

            if (person == null)
            {
                return NotFound();
            }

            return person;
        }

        // PUT: api/People/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPeople(int id, People people)
        {
            if (id != people.UserId)
            {
                return BadRequest();
            }

            if (!PeopleDataValidation.IsPersonInfoValid(people))
            {
                return Problem("Person data is invalid");
            }

            if (PhoneNumberExists(people.PhoneNumber))
            {
                return Problem("This phone number already exists.");
            }

            _context.Entry(people).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PeopleExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/People
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<People>> PostPeople(People people)
        {
            people.PhoneNumber = PeopleDataValidation.ParseNumber(people.PhoneNumber);
            
            if (!PeopleDataValidation.IsPersonInfoValid(people)) // Best case scenario would be custom errors for all individual fields
            {
                return Problem("Person data is invalid");
            }

            if (PhoneNumberExists(people.PhoneNumber))
            {
                return Problem("This phone number already exists.");
            }

            _context.People.Add(people);
            await _context.SaveChangesAsync();
            
            return CreatedAtAction("GetPeople", new { id = people.UserId }, people);
        }

        // DELETE: api/People/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<People>> DeletePeople(int id)
        {
            var people = await _context.People.FindAsync(id);
            if (people == null)
            {
                return NotFound();
            }

            _context.People.Remove(people);
            await _context.SaveChangesAsync();

            return people;
        }
        
        private bool PeopleExists(int id)
        {
            return _context.People.Any(e => e.UserId == id);
        }

        private bool PhoneNumberExists(string phoneNum)
        {
            return _context.People.Any(pn => pn.PhoneNumber == phoneNum);
        }
    }
}
