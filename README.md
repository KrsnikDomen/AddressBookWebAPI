# AddressBookWebAPI

<h3>Description:</h3>
<p>This was my first time making full stack web application. Of technologies used (on a list below) I only used .Net Core for desktop. A lot of time was spent just learning required technologies and frameworks separately and just figuring out where each piece of it comes into place to make it a full blown web application.</p>

<p>I used database first approach, which I later connected to it by using Entity Framework Core. Then I generated API from my context class. For testing API I used Postman. After that, I started on front end by generating Angular project and slowly started working on it. Since it was my first time using Angular and Typescript, the results aren't exactly spectacular to say the least. As I added more functionality and parts into it, the whole structure changed and because of lack of experience, it started to look like a mess from UX perspective.</p>

<p>In the end, some parts just don't work because I wasn't able to implement small stuff to connect things together. The whole experience was really fun to me and I learned a lot.</p>

<h3>Setup:</h3>
<p>Database will have to be created separately. SQL file for table creation and sample data inserts is located in *./DatabaseFile/*. Change server path in Visual Studio project in *appsettings.json* under *AddressBookDemo* parameter. Server and client applications will have to be launched separately.</p>

<h3>Used technologies/tools:</h3>

* .Net Core and ASP NET Core
* Entity Framework Core
* Bootstrap and Angular
* MSSQL Local ServerD

<h3>Features implemented/missing:</h3>

 * Search each data separately (this should be done on the backend).
   > Functionality is implemented on back and front end. Couldn't get value from input to search.
   
 * Validation must check if all data is entered and that phone number does not already exsist in database.
   > Done in the back end.
   
 * The application should be composed of two parts, backend and frontend.
   > Done.
    
 * List view with (serverside) search and pagination.
   > Search implemented on back end, pagination is not included.
   
 * View of a single contact with all contact's information.
   > Idea was to show each individual contact on edit page.
   
 * Create / Update with validation (all fields required).
   > Data validation is done on back end, should be done on front end too.
   
 * Deleting – user must confirm delete (modal).
   > Implemented

 * Serverside errors should be displayed to user (modal).
   > Server generates some custom errors which are sent to front, but not shown to user.
