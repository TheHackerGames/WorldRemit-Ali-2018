using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Models;
using Api.Repos;

namespace Api
{
    public class JournalService : IJournalService
    {
        private readonly IJournalRepo _journalRepo;
        private readonly IHeroRepo _heroRepo;

        public JournalService(IJournalRepo journalRepo, IHeroRepo heroRepo)
        {
            _journalRepo = journalRepo;
            _heroRepo = heroRepo;
        }

        public async Task AddEntry(JournalEntry entry)
        {
            var hero = await _heroRepo.GetByAlexaId(entry.AlexaHeroId);

            await _journalRepo.AddEntry(new Journal
            {
                HeroId = hero.Id,
                Description = entry.Description,
                Duration = entry.Duration,
                EntryType = entry.Type,
                Title = entry.Title,
                DateTime = entry.DateTime
            });
        }

        public async Task<IEnumerable<Journal>> Get(int heroId)
        {
            return await _journalRepo.GetEntries(heroId);
        }
    }
}
