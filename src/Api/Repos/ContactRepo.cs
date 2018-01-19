using System.Threading.Tasks;
using Api.Models;

namespace Api.Repos
{
    public class ContactRepo : IContactRepo
    {
        private readonly IDb _db;

        public ContactRepo(IDb db)
        {
            _db = db;
        }

        public async Task CreateContact(Contact contact)
        {
            await _db.Execute(@"
                INSERT INTO [dbo].[Contact]
                    ([HeroId]
                    ,[VolunteerId])
                VALUES
                    (@HeroId
                    ,@VolunteerId)", contact).ConfigureAwait(false);
        }
    }
}
