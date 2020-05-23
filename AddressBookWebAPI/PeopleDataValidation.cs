using System.Linq;
using System.Text.RegularExpressions;
using AddressBookWebAPI.Models;

namespace AddressBookWebAPI
{
    public class PeopleDataValidation
    {
        // Checks if person info is valid to insert to database
        // That is: it is not null or just empty spaces
        public static bool IsPersonInfoValid(People person)
        {
            if (IsStringValid(person.FirstName) &&
                IsStringValid(person.LastName) &&
                !IsStringEmpty(person.Address) &&
                IsAllNumbers(person.PhoneNumber))
            {
                return true;
            }

            return false;
        }

        // Checks if first name, last name and address are not empty, null, empty spaces and only includes letters
        private static bool IsStringValid(string str)
        {
            if (!IsStringEmpty(str) && IsAllLetters(str))
            {
                return true;
            }

            return false;
        }

        private static bool IsStringEmpty(string str)
        {
            if (string.IsNullOrEmpty(str) && str == " ") return true;
            return false;
        }

        private static bool IsAllLetters(string name)
        {
            return name.All(char.IsLetter);
        }

        private static bool IsAllNumbers(string phoneNum)
        {
            return phoneNum.All(char.IsDigit);
        }

        // Parse data

        //public static string ParseName(string name)
        //{
        //    name = name.Trim().ToLower();

        //    char[] c = name.ToCharArray();
        //    c[0] = char.ToUpper(c[0]);
        //    return new string(c);
        //}

        // Not clean method
        public static string ParseNumber(string num)
        {
            return Regex.Replace(num, @"\s+", "");
        }
    }
}
