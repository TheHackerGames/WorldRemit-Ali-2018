using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Models;

namespace Api.Repos
{
    public interface IJournalRepo
    {
        Task AddEntry(Journal journal);
        Task<IEnumerable<Journal>> GetEntries(int heroId);
    }
}