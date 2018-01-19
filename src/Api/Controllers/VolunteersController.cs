using System.Linq;
using System.Threading.Tasks;
using Api.Repos;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("[controller]")]
    public class VolunteersController : Controller
    {
        private readonly IVolunteerRepo _repo;

        public VolunteersController(IVolunteerRepo repo)
        {
            _repo = repo;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetVolunteer(int id)
        {
            var volunteer = await _repo.Get(id);

            if (volunteer == null)
            {
                return NotFound();
            }

            return Ok(volunteer);
        }

        [HttpGet("{id}/categories")]
        public async Task<IActionResult> GetCategories(int id)
        {
            var categories = await _repo.GetCategories(id);

            if (categories == null || !categories.Any())
            {
                return NotFound();
            }

            return Ok(categories);
        }

        // TODO: use search criteria
        [HttpGet]
        public async Task<IActionResult> SearchVolunteers()
        {
            var volunteers = await _repo.Search(null);

            if (volunteers == null || !volunteers.Any())
            {
                return NotFound();
            }

            return Ok(volunteers);
        }
    }
}