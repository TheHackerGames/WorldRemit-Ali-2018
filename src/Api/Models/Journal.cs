using System;

namespace Api.Models
{
    public class Journal
    {
        public int Id { get; set; }
        public int HeroId { get; set; }
        public string EntryType { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Duration { get; set; }
        public string IconUrl { get; set; }
        public DateTime DateTime { get; set; }
    }
}
