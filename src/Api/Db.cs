using System.Collections.Generic;
using System.Data.SqlClient;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;

namespace Api
{
    public class Db : IDb
    {
        private readonly string _connectionString;

        public Db(IConfiguration configuration)
        {
            _connectionString = configuration.GetValue<string>("DatabaseConnectionString");
        }

        public async Task<IEnumerable<T>> Query<T>(string query, object @params = null)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                return await connection.QueryAsync<T>(query, @params).ConfigureAwait(false);
            }
        }

        public async Task Execute(string command, object @params = null)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                await connection.ExecuteAsync(command, @params).ConfigureAwait(false);
            }
        }

        public async Task<T> ExecuteScalar<T>(string command, object @params = null)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                return await connection.ExecuteScalarAsync<T>(command, @params).ConfigureAwait(false);
            }
        }
    }
}