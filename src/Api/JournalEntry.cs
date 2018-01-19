using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api
{
    public class JournalEntry
    {
        public string AlexaHeroId { get; set; }

        public string Type { get; set; }

        public string Title { get; set; }

        public DateTime DateTime { get; set; }

        public string Description { get; set; }

        public string Duration { get; set; }
        //alexaHeroId
        //    type - one of these: “PC” (phone call), “EP” (episode), “HR” (heart rate)
        //    title - e.g. “Call with Daniel”, “Episode”
        //datetime
        //    description - random of predefined strings
        //duration - always "1 min"
    }
}
