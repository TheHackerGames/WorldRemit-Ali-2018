using Api.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Repos
{
    public class VolunteerRepo : IVolunteerRepo
    {
        private readonly IDb _db;

        public VolunteerRepo(IDb db)
        {
            _db = db;
        }

        public async Task<IEnumerable<Category>> GetCategories(int id)
        {
            return await _db.Query<Category>(@"
                SELECT c.Code, c.Name
                FROM [dbo].[Category] c
	                INNER JOIN [dbo].[VolunteerCategory] vc
		                ON c.Code = vc.CategoryCode
                WHERE vc.[VolunteerId] = @id", new {id}).ConfigureAwait(false);
        }

        public async Task<Volunteer> Get(int id)
        {
            return (await _db.Query<Volunteer>(@"
                SELECT [Id]
                    ,[Name]
                    ,[Address]
                    ,[Location]
                    ,[ContactNumber]
                    ,[Description]
                    ,[ProfilePicture]
                    ,[Rating]
                FROM [dbo].[Volunteer]
                WHERE Id = @id", new { id }).ConfigureAwait(false))
                .FirstOrDefault();
        }

        public async Task<IEnumerable<Volunteer>> Search(SearchCriteria criteria)
        {
            // TODO: filter by search criteria
            return await _db.Query<Volunteer>(@"
                SELECT [Id]
                    ,[Name]
                    ,[Address]
                    ,[Location]
                    ,[ContactNumber]
                    ,[Description]
                    ,[ProfilePicture]
                    ,[Rating]
                FROM [dbo].[Volunteer]").ConfigureAwait(false);
        }
    }
}
