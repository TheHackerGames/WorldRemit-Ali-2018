namespace Api.Models
{
    public class Contact
    {
        public int HeroId { get; set; }
        public int VolunteerId { get; set; }
        public string Name { get; set; }
        public string ContactNumber { get; set; }
        public string Address { get; set; }
        public string Description { get; set; }
        public string ProfilePicture { get; set; }
        public string Rating { get; set; }
    }
}
