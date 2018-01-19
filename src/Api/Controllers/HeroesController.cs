using System.Linq;
using System.Threading.Tasks;
using Api.Repos;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("[controller]")]
    public class HeroesController : Controller
    {
        private readonly IHeroRepo _repo;

        public HeroesController(IHeroRepo repo)
        {
            _repo = repo;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetHero(int id)
        {
            var hero = await _repo.Get(id);

            if (hero == null)
            {
                return NotFound();
            }

            return Ok(hero);
        }

        [HttpGet]
        public async Task<IActionResult> GetHero(string alexaHeroId)
        {
            var hero = await _repo.GetByAlexaId(alexaHeroId);

            if (hero == null)
            {
                return NotFound();
            }

            return Ok(hero);
        }

        [HttpGet("{id}/contacts")]
        public async Task<IActionResult> GetContacts(int id)
        {
            var contacts = await _repo.GetContacts(id);

            if (contacts == null || !contacts.Any())
            {
                return NotFound();
            }

            return Ok(contacts);
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
    }
}