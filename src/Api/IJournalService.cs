using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Models;

namespace Api
{
    public interface IJournalService
    {
        Task AddEntry(JournalEntry entry);
        Task<IEnumerable<Journal>> Get(int heroId);
    }
}