using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Models;

namespace Api.Repos
{
    public interface IHeroRepo
    {
        Task<Hero> Get(int id);
        Task<IEnumerable<Category>> GetCategories(int id);
        Task<IEnumerable<Contact>> GetContacts(int id);
        Task<Hero> GetByAlexaId(string alexaHeroId);
    }
}