namespace Api.Models
{
    public class Volunteer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
        public string ContactNumber { get; set; }
        public string Description { get; set; }
        public string ProfilePicture { get; set; }
        public string Rating { get; set; }
    }
}