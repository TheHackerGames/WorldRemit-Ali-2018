using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{ 
    [Route("[controller]")]
    public class JournalController : Controller
    {
        private readonly IJournalService _service;

        public JournalController(IJournalService service)
        {
            _service = service;
        }

        [HttpPost]
        public async Task<IActionResult> CreateJournalEntry([FromBody] JournalEntry entry)
        {
            await _service.AddEntry(entry);

            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> Get(int heroId)
        {
            var entries = await _service.Get(heroId);

            if (entries == null || !entries.Any())
            {
                entries = new List<Journal>();
            }

            return Ok(entries);
        }
    }
}