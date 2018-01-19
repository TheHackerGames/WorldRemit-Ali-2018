using System.Collections.Generic;
using System.Threading.Tasks;

namespace Api
{
    public interface IDb
    {
        Task<IEnumerable<T>> Query<T>(string query, object @params = null);
        Task Execute(string command, object @params = null);
        Task<T> ExecuteScalar<T>(string command, object @params = null);
    }
}