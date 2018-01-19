using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Models;

namespace Api.Repos
{
    public class JournalRepo : IJournalRepo
    {
        private readonly IDb _db;

        public JournalRepo(IDb db)
        {
            _db = db;
        }

        public async Task AddEntry(Journal journal)
        {
            await _db.Execute(@"
                INSERT INTO [dbo].[Journal]
	                ([EntryType]
	                ,[Title]
	                ,[Description]
	                ,[Duration]
	                ,[DateTime]
                    ,HeroId)
                VALUES (@EntryType
	                ,@Title
	                ,@Description
	                ,@Duration
	                ,@DateTime
                    ,@HeroId)", journal).ConfigureAwait(false);
        }

        public async Task<IEnumerable<Journal>> GetEntries(int heroId)
        {
            return await _db.Query<Journal>(@"
                SELECT [Id]
                    ,[HeroId]
                    ,[EntryType]
                    ,[Title]
                    ,[Description]
                    ,[Duration]
                    ,[DateTime]
                    ,[IconUrl]
                FROM [dbo].[Journal]
                    INNER JOIN [dbo].[JournalEntryType]
                        ON [Code] = [EntryType]
                WHERE HeroId = @heroId
                ORDER BY [DateTime]", new {heroId})
                .ConfigureAwait(false);
        }
    }
}
