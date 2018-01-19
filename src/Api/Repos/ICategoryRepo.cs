using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Models;

namespace Api.Repos
{
    public interface ICategoryRepo
    {
        Task<IEnumerable<Category>> GetCategories();
    }
}