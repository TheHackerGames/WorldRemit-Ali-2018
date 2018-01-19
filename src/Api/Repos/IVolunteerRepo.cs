using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Models;

namespace Api.Repos
{
    public interface IVolunteerRepo
    {
        Task<Volunteer> Get(int id);
        Task<IEnumerable<Category>> GetCategories(int id);
        Task<IEnumerable<Volunteer>> Search(SearchCriteria criteria);
    }
}