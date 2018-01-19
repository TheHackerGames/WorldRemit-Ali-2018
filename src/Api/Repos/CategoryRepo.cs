using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Models;

namespace Api.Repos
{
    public class CategoryRepo : ICategoryRepo
    {
        private readonly IDb _db;

        public CategoryRepo(IDb db)
        {
            _db = db;
        }

        public async Task<IEnumerable<Category>> GetCategories()
        {
            return await _db.Query<Category>(@"
                SELECT Code, Name
                FROM Category")
                .ConfigureAwait(false);
        }
    }
}
