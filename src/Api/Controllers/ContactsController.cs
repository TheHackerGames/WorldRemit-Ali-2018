using System;
using System.Threading.Tasks;
using Api.Models;
using Api.Repos;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("[controller]")]
    public class ContactsController : Controller
    {
        private readonly IContactRepo _repo;

        public ContactsController(IContactRepo repo)
        {
            _repo = repo;
        }

        [HttpPost]
        public async Task<IActionResult> CreateContact([FromBody] Contact contact)
        {
            try
            {
                await _repo.CreateContact(contact);
            }
            catch
            {
            }
            
            return Ok();
        }
    }
}