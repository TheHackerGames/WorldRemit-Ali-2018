using System.Threading.Tasks;
using Api.Models;

namespace Api.Repos
{
    public interface IContactRepo
    {
        Task CreateContact(Contact contact);
    }
}