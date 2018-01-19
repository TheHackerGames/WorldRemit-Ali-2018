using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Models;

namespace Api.Repos
{
    public class HeroRepo : IHeroRepo
    {
        private readonly IDb _db;

        public HeroRepo(IDb db)
        {
            _db = db;
        }

        public async Task<Hero> Get(int id)
        {
            return (await _db.Query<Hero>(@"
                SELECT Id, [Name], [Address],
	                [Location].Lat [Latitude],
	                [Location].Long [Longitude],
                    [AlexaHeroId]
                FROM Hero
                WHERE Id = @id", new {id}).ConfigureAwait(false))
                .FirstOrDefault();
        }

        public async Task<Hero> GetByAlexaId(string alexaHeroId)
        {
            return (await _db.Query<Hero>(@"
                SELECT Id, [Name], [Address],
	                [Location].Lat [Latitude],
	                [Location].Long [Longitude],
                    [AlexaHeroId]
                FROM Hero
                WHERE AlexaHeroId = @alexaHeroId", new {alexaHeroId}).ConfigureAwait(false))
                .FirstOrDefault();
        }

        public async Task<IEnumerable<Category>> GetCategories(int id)
        {
            return await _db.Query<Category>(@"
                SELECT c.Code, c.Name
                FROM [dbo].[Category] c
	                INNER JOIN [dbo].[HeroCategory] hc
		                ON c.Code = hc.CategoryCode
                WHERE hc.HeroId = @id", new {id}).ConfigureAwait(false);
        }

        public async Task<IEnumerable<Contact>> GetContacts(int id)
        {
            return await _db.Query<Contact>(@"
                SELECT c.[HeroId], c.[VolunteerId], v.Name, v.ContactNumber,
                    v.[Address]
                    ,v.[Description]
                    ,v.[ProfilePicture]
                    ,v.[Rating]
                FROM [dbo].[Volunteer] v
	                INNER JOIN [dbo].[Contact] c
		                ON v.Id = c.[VolunteerId]
                WHERE c.[HeroId] = @id", new { id }).ConfigureAwait(false);
        }
    }
}
