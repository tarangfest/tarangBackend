const fs = require("fs");
const path = require("path");
let events = [
  {
    name: "Malang",
    tagline: "Choreography Meets Chemistry at Malang!",
    event_type: "Team",
    event_category: "Dance",
    description:
      "Malang is a duo dance competition that spotlights the synergy between two talented dancers.In this event, participants perform intricately choreographed routines that blend a variety of dance styles, including Bollywood, contemporary, and more.,It's a captivating showcase of creativity, coordination, and chemistry between dance partners, offering a visual and emotional spectacle that leaves the audience spellbound.,Join us for Malang and witness the magic that unfolds when two dancers become one through the language of dance!",
    reg_fees: "400",
    max_participants: "2",
    min_participants: "2",
    event_date: "Nov 4, 2023",
    event_time: "2:00 PM",
    org_club: "Aavartan",
    duration: "3 hours approx.",
    instructions: [
      "Fill Registration google form (within deadline).",
      "Registration fees: 200/- (per head).",
      "All the participant members must have their registration card/institute card.",
      "All forms of dance are allowed.",
      "Duration: 2 to 4 minutes.",
      "Penalized points for exceeding time limits.",
    ],
    coordinators: [
      {
        name: "Ashish Chaudhary",
        pno: "9991689805",
        _id: {
          $oid: "651d31dbdb52132424884f30",
        },
      },
      {
        name: "Bhavika Sehgal",
        pno: "8726788999",
        _id: {
          $oid: "651d31dbdb52132424884f31",
        },
      },
    ],
    images: [
      "https://fastly.picsum.photos/id/901/4016/4016.jpg?hmac=1rDqVF-p5zoRrKvKU1pHRho-8ervt8RaiXEccYvbRHg",
    ],
    prize_pool: "7000",
  },
  {
    name: "Breakin Battles",
    tagline: "Dance, Clash, Conquer: Join the Battle!",
    event_type: "Solo",
    event_category: "Dance",
    description:
      'Breakin Battles is a solo dance battle where dancers of diverse backgrounds and styles unleash their raw talent and creativity.\n\n In the competition, contestants must first improvise and adapt to randomly selected music during the Prelims, testing their creativity.\n\n Then, in the Battle Round, we create thrilling face-offs where dancers showcase their best moves, innovation, and stage presence, challenging opponents in real time.\n\n It offers a platform for dancers to impress judges, push their limits, and captivate the audience with their freestyle dance artistry, celebrating individuality and self-expression.\n\n "Step into the spotlight and join us for Breakin’ Battles, where the dance floor becomes your battlefield!"',
    reg_fees: "300",
    max_participants: "1",
    min_participants: "1",
    event_date: "Nov 5, 2023",
    event_time: "2:00 PM",
    org_club: "Aavartan",
    duration: "4 hours approx.",
    instructions: [
      "1. On spot songs will be assigned for the dance faceoff\n2. Fill Registration google form (within deadline)\n3. Registration fees: 300/- (per head)\n4. All the participant members must have their registration card/institute card.\n5. All forms of dance are allowed.\n6. Duration: Will be assigned on spot.",
    ],
    coordinators: [
      {
        name: "Nithin Adepu",
        pno: "7729054812",
        _id: {
          $oid: "651d31dbdb52132424884f33",
        },
      },
      {
        name: "Sriram Gone",
        pno: "7075669396",
        _id: {
          $oid: "651d31dbdb52132424884f34",
        },
      },
    ],
    images: [
      "https://fastly.picsum.photos/id/901/4016/4016.jpg?hmac=1rDqVF-p5zoRrKvKU1pHRho-8ervt8RaiXEccYvbRHg",
    ],
    prize_pool: "8000",
  },
  {
    name: "Ciniverse",
    tagline: "Script Your Story, Shoot for Stardom at Ciniverse!",
    event_type: "Solo",
    event_category: "Photography",
    description:
      "Ciniverse is a Film making competition, that can be presented in a genre of tour personal choice and will be judged based on cinematography, lighting, editing and color grading.",
    reg_fees: "200",
    max_participants: "50",
    min_participants: "20",
    event_date: "Nov 3, 2023",
    event_time: "",
    org_club: "Shutter Box",
    duration: "3 days online event",
    instructions: [
      "Film should be a minimum of 5mins, and must not exceed 30 mins.",
      "Films can be from any language of your choice.",
      "Judgment prioritization is based on technical features of film:\na. Cinematography\nb. Editing\nc. Lighting\nd. Color grading",
    ],
    coordinators: [
      {
        name: "Darsi Manjith",
        pno: "9346485364",
        _id: {
          $oid: "651d31dbdb52132424884f36",
        },
      },
    ],
    images: [
      "https://fastly.picsum.photos/id/901/4016/4016.jpg?hmac=1rDqVF-p5zoRrKvKU1pHRho-8ervt8RaiXEccYvbRHg",
    ],
    prize_pool: "8000",
  },
  {
    name: "Pixcellence",
    tagline: "Picture-Perfect Moments Await at Pixcellence!",
    event_type: "Solo",
    event_category: "Photography",
    description:
      "All you photographers! Get ready to show your creativity! If you've got a camera or a phone and love taking pictures, this is for you. We're hosting a cool online photo contest called \"Pixcellence\" and it's your chance to showcase your photography skills and creativity. The themes for the contests are Macro, Monochrome, Street photography.",
    reg_fees: "50",
    max_participants: "250",
    min_participants: "100",
    event_date: "Nov 3, 2023",
    event_time: "",
    org_club: "Shutter Box",
    duration: "all 3 days online",
    instructions: [
      "Submission Limit: You can submit a maximum of three photo per theme.",
      "Theme Flexibility: You're not obligated to submit photos for every theme; you can choose which themes you want to participate in.",
      "Post-Processing Allowed: You are allowed to edit or enhance your photos before submitting them.",
      "Title Requirement: Every photo you submit must have a title.",
      'File Naming Convention: While saving your photos, use the format "Photo title_Name of\nparticipant" for the filenames.',
      "Avoid Additional Elements: Do not include borders, frames, watermarks, or filters in your photos.",
      "Original Work: All photos you submit must be your own original creations.",
    ],
    coordinators: [
      {
        name: "K L Praseeda Keerthi",
        pno: "9866246733",
        _id: {
          $oid: "651d31dbdb52132424884f38",
        },
      },
    ],
    images: [
      "https://fastly.picsum.photos/id/901/4016/4016.jpg?hmac=1rDqVF-p5zoRrKvKU1pHRho-8ervt8RaiXEccYvbRHg",
    ],
    prize_pool: "3000",
  },
  {
    name: "Odyssey",
    tagline: "The Dance Odyssey Begins Here!",
    event_type: "Solo",
    event_category: "Dance",
    description:
      "Odyssey is a Solo Dance competition that puts individual dancers in the spotlight, allowing them to shine and exhibit their exceptional skills, technique, and performance abilities.\n\n Dancers from various genres and backgrounds take the stage to express themselves through their unique dance styles.\n\n It's a thrilling showcase of talent, passion, and the artistry of dance.\n\n Prepare to be captivated by the solo dancers as they embark on an unforgettable journey of movement and expression!",
    reg_fees: "200",
    max_participants: "1",
    min_participants: "1",
    event_date: "Nov 4, 2023",
    event_time: "8:30 AM",
    org_club: "Aavartan",
    duration: "3 hours approx.",
    instructions: [
      "Only solo performances are allowed.",
      "Fill Registration google form (within deadline)",
      "Registration fees: 200/-.",
      "All the participant members must have their registration card/institute card.",
      "All forms of dance are allowed.",
      "Duration: 1.5 to 2.5 minutes.",
      "Penalized points for exceeding time limits.",
    ],
    coordinators: [
      {
        name: "Vansh Vyas",
        pno: "7987529916",
        _id: {
          $oid: "651d31dbdb52132424884f2d",
        },
      },
      {
        name: "Samarth Yadav",
        pno: "7017565239",
        _id: {
          $oid: "651d31dbdb52132424884f2e",
        },
      },
    ],
    images: [
      "https://fastly.picsum.photos/id/901/4016/4016.jpg?hmac=1rDqVF-p5zoRrKvKU1pHRho-8ervt8RaiXEccYvbRHg",
    ],
    prize_pool: "7000",
  },
  {
    name: "Jhankaar",
    tagline: "Feel the Beat, Join the Heat - Jhankaar's Elite!",
    event_type: "Team",
    event_category: "Dance",
    description:
      "Jhankaar is a group dance competition that pits diverse dance groups against each other in a battle of rhythm and creativity. Dance enthusiasts from various backgrounds and styles, including Bollywood, hip hop, jazz, and more, come together to showcase their talent and passion on one vibrant stage. It's a celebration of movement, music, and the infectious energy that dance brings, promising an unforgettable experience for both participants and spectators. Get ready to witness the power of unity in dance!",
    reg_fees: "200",
    max_participants: "500",
    min_participants: "8",
    event_date: "Nov 3, 2023",
    event_time: "4:00 PM",
    org_club: "Aavartan",
    duration: "3 hours approx.",
    instructions: [
      "Only group performances are allowed and all members should be equally involved throughout the performance.",
      "Fill Registration google form (within deadline).",
      "Registration fees: 200/- (per head).",
      "All the participant members must have their registration card/institute card.",
      "All forms of dance are allowed.",
      "Duration: 7 to 9 minutes.",
      "Penalized points for exceeding time limits.",
    ],
    coordinators: [
      {
        name: "Rakshit Goel",
        pno: "8941842574",
        _id: {
          $oid: "651d31dbdb52132424884f2a",
        },
      },
      {
        name: "Priyank Bhaskar",
        pno: "6232997288",
        _id: {
          $oid: "651d31dbdb52132424884f2b",
        },
      },
    ],
    images: [
      "https://fastly.picsum.photos/id/901/4016/4016.jpg?hmac=1rDqVF-p5zoRrKvKU1pHRho-8ervt8RaiXEccYvbRHg",
    ],
    prize_pool: "40000",
  },
  {
    name: "Rangmanch",
    tagline: "Solo Acts, Infinite Expressions: Rangmanch Chronicles!",
    event_type: "Solo",
    event_category: "Drama",
    description:
      "Colour the stage with the shades of your expressions! Rangmanch, the Mono Act competition, is THE canvas to paint your emotions on, THE rock to carve your name into and the PERFECT opportunity to flaunt your creativity, unveiling your self-written pieces for the world to see!",
    reg_fees: "50",
    max_participants: "1",
    min_participants: "1",
    event_date: "11/4/2023",
    event_time: "11:30 AM",
    org_club: "Jazbaat",
    duration: "2-3 min",
    instructions: [
      "1st Round- Participants are required to choose any one emotion and prepare their act based on it.",
      "2nd Round- Participants are required to choose two contrasting emotions and create their performance (with a focus on smooth transitioning between them and ensuring an equal expression of both emotions throughout the act).",
      "Duration:- 2-3 minutes.",
      "Rules:-\n a) No use of abusive language or words.\nb) Nuditiy/Vulgarity is strictly proihibited.\nc) No use of direct comments on any religion/community/ company/institution.\nd) No other person's involvement is allowed in the whole act.",
      "Round-1: 50 and Round-2:100",
    ],
    coordinators: [
      {
        name: "Reishabh Rathore",
        pno: "9315137833",
        _id: {
          $oid: "651d31dbdb52132424884f45",
        },
      },
      {
        name: "Uttara Kamat",
        pno: "9869261132",
        _id: {
          $oid: "651d31dbdb52132424884f46",
        },
      },
    ],
    images: [
      "https://fastly.picsum.photos/id/901/4016/4016.jpg?hmac=1rDqVF-p5zoRrKvKU1pHRho-8ervt8RaiXEccYvbRHg",
    ],
    prize_pool: "14000",
  },
  {
    name: "Nukkad: Ek Goonj",
    tagline: "Raise Your Voice, Create a Scene at Nukkad: Ek Goonj!",
    event_type: "Team",
    event_category: "Drama",
    description:
      "Offo! What’s all that ruckus about? Looks like it’s not just any ruckus, it’s a Nukkad! Give voice to the important messages that YOU want others to hear in Jazbaat’s Nukkad ki Nautanki! Empty that glass of haldi-doodh the night before, you’ll need it to shout your message LOUD and CLEAR! Get the best of your Hulla-Gulla for the one big tamasha that is the Nukkad Naatak Competition.",
    reg_fees: "2000",
    max_participants: "25",
    min_participants: "18",
    event_date: "Nov 3, 2023",
    event_time: "9:00 AM",
    org_club: "Jazbaat",
    duration: "15 minutes ",
    instructions: [
      "Teams should keep the time limit in mind.",
      "Mics/ microphones/ speakers will not be allowed during the play, even if the teams will bring their own.",
      "You can bring your own musical instruments like harmonium,flute,clapbox or any other physically playable instruments.",
      "The content of your nukkad natak should be socially relevant and thought-provoking.It should address important issues or convey a meaningful message.",
      "Use of any abusive/obscene language is prohibited.",
      "Usage of props is allowed,teams have to bring their own props.",
      "Use of any inflammable/ hazardous elements are strictly prohibited.",
      "Teams are requested to confirm the validity of props before bringing them.",
      "After the performance,clean up the area and leave it in the same condition as before the play.",
      "The decision of judges will be final and binding.",
    ],
    coordinators: [
      {
        name: "Uday Shakya",
        pno: "7017474241",
        _id: {
          $oid: "651d31dbdb52132424884f42",
        },
      },
      {
        name: "Shivansh Shukla",
        pno: "7895043346",
        _id: {
          $oid: "651d31dbdb52132424884f43",
        },
      },
    ],
    images: [
      "https://fastly.picsum.photos/id/901/4016/4016.jpg?hmac=1rDqVF-p5zoRrKvKU1pHRho-8ervt8RaiXEccYvbRHg",
    ],
    prize_pool: "40000",
  },
  {
    name: "Theatre Wars",
    tagline:
      "Your Story Your Stage, From Laughter to Tears, Theatre Wars Inspires",
    event_type: "Team",
    event_category: "Drama",
    description:
      "PRESENTING your chance to set the stage ablaze in a glorious stage-act competition!\n\n Gather your friends and set the satge ablaze, because this competition is group performances only!\n\n And don't restrict yourselves, your act can be on ANY topic and theme!\n\n Mela-Drama is THE opportunity to showcase your group's dramatic flair.",
    reg_fees: "1500",
    max_participants: "20",
    min_participants: "10",
    event_date: "11/5/2023",
    event_time: "5:00 PM",
    org_club: "Jazbaat",
    duration: "20-45 minutes",
    instructions: [
      "Maximum number of participants per team: 20 (including crew/backstage members).",
      "Both original and adapted scripts are allowed.",
      "You have to send a synopsis, and script of your play by 30 October 2023, 11:59 PM.",
      "There is an entry fee of Rs.1500 to participate in the competition.",
      "No cross-college teams are allowed.",
      "We highly discourage any plagiarism in the event. Any team found copying a play without any prior permission of the play writer will be disqualified.",
      "Mention your college name, POC name, and contact number along with submissions.",
      "Performance should not exceed 60 minutes in length (Empty stage to Empty stage). Each team will be given a tech rehearsal time of 15 minutes before the start of the performance.",
      "The details of the play should be sent prior to the competition. The details include -\n\na. The title of the play.\n\nb. Approximate duration Requirements from the host institute (subject to availability)\n\nc. If self-written, credit to the playwrights and/or plays whose material has been used. The subject line would be as per the common format STAGEPLAY_COLLEGENAME",
      "Any kind of damage caused to the stage will result in a 30% penalty.",
      "Use of flammable substances or liquids (including water) is strictly prohibited. In case of special liquid requirements with the context of the play absolutely necessary, then an exception may be made under the discretion of the organizing team. The participants should take prior permission from the organizing team.",
      "Vulgarity is strictly prohibited and can lead to disqualification.",
      "No professional assistance is permitted, all team members should be certified students of the institute. Please bring along your identity cards.",
      "Use of any hazardous element/prop is strictly prohibited.",
      "Technical support will be provided to make the team familiar with the lights console.",
      "Obscenity of any kind that is harmful to the interests or beliefs of specific but not limited to social, economic, religious, gender or political groups will lead to the disqualification of the team.",
      "Performance must be suitable for the general audience and should not contain any offensive or inappropriate content.",
      "The decision of the judging panel will be final and binding.",
      "The Judging criteria would be as follows -\n\n a. Script and Direction: 30%\n\nb. Acting: 35%\n\nc. Lights and Music: 15%\n\nd. Production: 20%",
    ],
    coordinators: [
      {
        name: "Shanu Priya Garg",
        pno: "8660761323",
        _id: {
          $oid: "651d31dbdb52132424884f48",
        },
      },
      {
        name: "Priyanshu Bujethia",
        pno: "9352816482",
        _id: {
          $oid: "651d31dbdb52132424884f49",
        },
      },
    ],
    images: [
      "https://fastly.picsum.photos/id/901/4016/4016.jpg?hmac=1rDqVF-p5zoRrKvKU1pHRho-8ervt8RaiXEccYvbRHg",
    ],
    prize_pool: "45000",
  },
  {
    name: "Frame-by-Frame Fockery",
    tagline: "Video Wizards, Unite at Frame-by-Frame Fockery!",
    event_type: "Solo",
    event_category: "Fine Arts",
    description:
      "“Frame-by-Frame Fockery” is a platform provided to showcase the abilities of video editors and Animators.\n\n Make a stop motion animation to Compete with a talented pool from all over India, where your creativity takes the center of stage! make your team of 1-3 like-minded visionaries for an exciting 1–3-minute animation journey.\n\n The file format accepted will be MP4 only, Adding your personal touch to claim your shot at fame and fortune is a notable point.\n\n You are free to prefer ready-made props or love crafting your own.\n\n Amaze the platform out.",
    reg_fees: "200",
    max_participants: "3",
    min_participants: "1",
    event_date: "Oct 30, 2023",
    event_time: "11:59 PM",
    org_club: "Abhivyakti",
    duration: "-",
    instructions: [
      "Creativity: The animation should be original and imaginative, with a unique concept and execution.",
      "Technical skill: The animation should be well-crafted, consistent lighting, and a high level of technical detail.",
      "Storytelling: The animation should have a clear and engaging story that is well-paced and executed.",
      "Personal touch: The animation should reflect the unique style and personality of the creators.",
      "Sound Design: The animation will also be judged on the basis of the attention given to sound design and the detail of the sounds used.",
      "Teams can be 1-3 people in size.",
      "Animations should be 1-3 minutes long.",
      "Animations must be in MP4 format (resolution: atleast 1080p).",
      "Animations must be original and created specifically for the competition.",
      "The completed video should have a physical watermark (on the bottom left) in every scene, to prove originality. (e.g. adding a small card with your name on it on the bottom left of every scene.) The watermark shouldn’t hinder the video in any way or form.",
      "Animations must not contain any copyrighted material, including music, sound effects, or footage.",
      "Animations must be suitable for all ages.",
      "Explicit content is not allowed.",
    ],
    coordinators: [
      {
        name: "Madhavjith",
        pno: "7994922406",
        _id: {
          $oid: "651d31dbdb52132424884f4b",
        },
      },
    ],
    images: [
      "https://fastly.picsum.photos/id/901/4016/4016.jpg?hmac=1rDqVF-p5zoRrKvKU1pHRho-8ervt8RaiXEccYvbRHg",
    ],
    prize_pool: "TBD",
  },
  {
    name: "ArtLabs",
    tagline: "From Raw Materials to Masterpieces: ArtLabs Journey!",
    event_type: "Solo",
    event_category: "Fine Arts",
    description:
      "Attend the awaited creative workshops for Bamboo Furniture crafting and pottery.\n\n Attend this one-of-a-kind session to learn the basic fundamentals of these crafts and get hands-on experience while implementing and performing the fascinating and fun tasks .",
    reg_fees: "100",
    max_participants: "1",
    min_participants: "1",
    event_date: "Nov 3, 2023",
    event_time: "5:00 PM",
    org_club: "Abhivyakti",
    duration:
      "Event is for two days, 3/11/23 and 5/11/23. One type of workshop will be held on each day.",
    instructions: [
      "Materials: Participants will be provided with the necessary materials and tools for the workshops. A list of recommended materials will be provided in advance.",
      "Workshop Sessions: Participants will have the opportunity to attend workshops conducted by experienced instructors in both bamboo furniture crafting and pottery. Attendance at these sessions is mandatory for competition entry.",
      "Safety: Safety measures, including the use of protective gear and following workshop safety guidelines, must be strictly adhered to during the crafting process.",
      "Display: All completed pieces will be displayed for exhibition during the event. Participants are responsible for setting up their displays.",
      "Ownership: Participants retain ownership of their bamboo furniture and pottery pieces. However, they grant permission for their work to be displayed during the event.",
    ],
    coordinators: [
      {
        name: "Aditya Raj",
        pno: "9472016042",
        _id: {
          $oid: "651d31dbdb52132424884f4d",
        },
      },
    ],
    images: [
      "https://fastly.picsum.photos/id/901/4016/4016.jpg?hmac=1rDqVF-p5zoRrKvKU1pHRho-8ervt8RaiXEccYvbRHg",
    ],
    prize_pool: "TBD",
  },
  {
    name: "Cassiopeia",
    tagline: "Face the Gods and Goddesses in Cassiopeia's Realm!",
    event_type: "Team",
    event_category: "Fine Arts",
    description:
      "Step into a world of enchantment with the dynamic face painting and cosplay adventure, a mesmerizing 3-hour Warfare.\n\n The theme decided is “Greek gods and goddesses”.\n\n Reveal your creative self and let your imaginations run wild, but First and the most prior rule is, we appreciate tasteful elegance, so leave the inappropriate costumes at home.\n\n Bring your own clothes and materials, and assemble on the sight.\n\n And to top it all off, a dazzling ramp walk awaits, to showcase your gracious walk with on-the-spot created costumes.\n\n Show the plans you got, stage is waiting for you.",
    reg_fees: "200",
    max_participants: "2",
    min_participants: "2",
    event_date: "Nov 4, 2023",
    event_time: "4:30 PM",
    org_club: "Abhivyakti",
    duration: "3 hours + Rampwalk",
    instructions: [
      "Creativity: The model should creatively represent the chosen god or goddess.",
      "Essence: The costume and face painting should capture explicitly or implicitly portray the trait of the god or goddess chosen.",
      "Costume: The costume should include the colours or style of greek drapery.",
      "Face Painting: The level of skill and representation of elements in the face painting will be judged.",
      "Novelty: The costume and face painting should have an artistic flair and uniqueness of the artist.",
      "Rules:\n1. This is a Face painting and Cosplay competition.\n2. Participants will work in Teams of 2: One person will be the model and the other will be the artist.\n3. The Theme of the event is Greek Gods and Goddesses.\n4. The competition is of 3 hours which includes the costume and face painting.\n5. Inappropriate costumes will be disqualified.\n6. Paints, materials and clothes will have to be brought by participants.\n7. The entire ensemble should be prepared on sight.\n8. A ramp walk of all the participants will be held.\n9. Participants will have to explain their concept to the judges.",
    ],
    coordinators: [
      {
        name: "Swamini Gawad",
        pno: "7758095513",
        _id: {
          $oid: "651d31dbdb52132424884f4f",
        },
      },
    ],
    images: [
      "https://fastly.picsum.photos/id/901/4016/4016.jpg?hmac=1rDqVF-p5zoRrKvKU1pHRho-8ervt8RaiXEccYvbRHg",
    ],
    prize_pool: "TBD",
  },
  {
    name: "Artful Alteration",
    tagline: "Paint the Past, Define the Future at Artful Alteration!",
    event_type: "Team",
    event_category: "Fine Arts",
    description:
      "Got the mad skills with brush and paints?  Get ready for an electrifying three-hour challenge!\n\n Gather your dream team of five to convert the blank canvas into an unparalleled masterpiece.\n\n But here is the twist – you will have to reimagine any legendary painting in a known art style.\n\nFor the first 30 minutes, the internet is allowed for getting inspiration from various resources, but remember – originality is your ace. Plagiarism is strictly not allowed!\n\nReady to unleash your creativity?",
    reg_fees: "500",
    max_participants: "5",
    min_participants: "5",
    event_date: "Nov 4, 2023",
    event_time: "10:00 AM",
    org_club: "Abhivyakti",
    duration: "3 hours",
    instructions: [
      "Originality- The final product must be original and free of any plagiarism.",
      "Creativity- The final piece must be creative and interesting and must beat the preconceived notions attached to the painting as well as the style.",
      "Composition- The painting must be well composed and should look artistic rather than cluttered.",
      "Technique- The painting style and technique must be visually appealing and should be upheld to a certain standard of professionalism.",
      "Use of color- The color choices made must be accurate to a degree to both the original painting and the new art style.",
      "Rules:\n*Participants must work in a group of 5.\n*Participants will be given a famous painting and an art style. They must then recreate the painting in the art style on a 1 x 2 meter canvas sheet.\n* The painting and the art style will be given to each team through randomized card picking. Changing or re-selecting your prompts is not allowed\n* Duration of the competition is 3 hours.\n*A 1 x 2 metre canvas sheet, acrylic paint and paintbrushes will be provided to each team.\n* The Internet is allowed for the first 30 minutes only for getting inspiration. Your time will start after the first 30 minutes are up.\n* Plagiarism is strictly not allowed.\n*Political or offensive submissions will be disqualified.\n* All team members must participate actively.\n* The painting must be completed within the allotted time.",
    ],
    coordinators: [
      {
        name: "Paridhi Bisht",
        pno: "9910054931",
        _id: {
          $oid: "651d31dbdb52132424884f51",
        },
      },
    ],
    images: [
      "https://fastly.picsum.photos/id/901/4016/4016.jpg?hmac=1rDqVF-p5zoRrKvKU1pHRho-8ervt8RaiXEccYvbRHg",
    ],
    prize_pool: "TBD",
  },
  {
    name: "Off The Wall",
    tagline: "Make Your Mark on the Nescafe Wall!",
    event_type: "Solo",
    event_category: "Fine Arts",
    description:
      '"Off the Wall" is an online mural design competition which enables participants to freely express their artistic abilities and have a chance at setting free their inner Michelangelo!\n\n The submission for the same will be done before the fest.\n\n The winning design will be featured on the Nescafe wall in the campus during the fest!',
    reg_fees: "200",
    max_participants: "1",
    min_participants: "1",
    event_date: "Oct 17, 2023",
    event_time: "11:59 PM",
    org_club: "Abhivyakti",
    duration: "Online competition submission till 17/10/2023.",
    instructions: [
      "Originality- The final product must be original and free of any plagiarism.",
      "Creativity- The artwork should be original and imaginative, with a unique concept and execution.",
      "Composition- There should be quality of artistic composition and overall design.",
      "Technical skill- The design should be well crafted, consistent styling and maintaining technical detail.",
      "Use of color- The color and tone should be chosen wisely, maintaining balance of image within its space.",
      "Rules:\n* Participants must work individually.\n* The work must be submitted in High quality png/pdf format.\n* Theme: Fantasy\n* The dimension of the artwork should be 3000 x 2200 pixels\n* The work can be handmade or digitally done.\n* Plagiarism is strictly not allowed.\n* The last date of submission for the event is October 17th, 2023.\n*Submissions and registration will be done through a Google form.",
    ],
    coordinators: [
      {
        name: "Ananya Aggrawal",
        pno: "8429337823",
        _id: {
          $oid: "651d31dbdb52132424884f53",
        },
      },
    ],
    images: [
      "https://fastly.picsum.photos/id/901/4016/4016.jpg?hmac=1rDqVF-p5zoRrKvKU1pHRho-8ervt8RaiXEccYvbRHg",
    ],
    prize_pool: "8500",
  },
  {
    name: "Shutter Stories",
    tagline: "Journey Through Pixels at the Shutter Stories Exhibition!",
    event_type: "Solo",
    event_category: "Photography",
    description:
      "Get ready to be captivated by the creativity of our college community!\n\n Our upcoming photo exhibition will showcase a diverse range of visually stunning and thought-provoking images captured by students, faculty, and staff. From breathtaking landscapes to candid moments, this exhibit promises to be a celebration of talent and artistic expression. \n\nJoin us for an immersive visual experience that reflects the spirit and creativity of our college community.",
    reg_fees: "0",
    max_participants: "0",
    min_participants: "0",
    event_date: "Nov 3, 2023",
    event_time: "12:00:00 AM",
    org_club: "Shutter Box",
    duration: "full day",
    instructions: ["no guidelines"],
    coordinators: [
      {
        name: "Pulivarthi Mahesh",
        pno: "9392816922",
        _id: {
          $oid: "651d31dbdb52132424884f3c",
        },
      },
    ],
    images: [
      "https://fastly.picsum.photos/id/901/4016/4016.jpg?hmac=1rDqVF-p5zoRrKvKU1pHRho-8ervt8RaiXEccYvbRHg",
    ],
    prize_pool: "TBD",
  },
  {
    name: "Canon Workshop",
    tagline: "Shutter Speed to Creative Vision with Canon",
    event_type: "Solo",
    event_category: "Photography",
    description:
      "Join us for a captivating Canon Workshop at our cultural festival!\n\n Discover the art of photography as we explore Canon's cutting-edge technology and techniques.\n\n Unlock your creative potential, from capturing stunning moments to unleashing your inner artist.\n\n Don't miss this opportunity to sharpen your photography skills and ignite your passion for visual storytelling with Canon.",
    reg_fees: "0",
    max_participants: "200",
    min_participants: "50",
    event_date: "Nov 4, 2023",
    event_time: "4:00 PM",
    org_club: "Shutter Box",
    duration: "2 and half hours",
    instructions: [
      "Be open to new learning experiences and follow the instructions given during the workshop.",
      "Don't hesitate to ask questions and engage in discussions with other participants.",
      "Be mindful of other participants' space and experience. If you wish to photograph other attendees, always ask for their permission first.",
      "Take the opportunity to connect with other photography enthusiasts and professionals. You can learn from their experiences and even collaborate on future projects.",
      "After the workshop, reflect on your learning experience. Think about how you can apply the skills and techniques learned during the workshop in your future photography projects.",
      "Before attending the workshop, prepare a list of questions you'd like answered. If there are specific topics you're interested in, make sure to note them down. The more prepared you are, the more you'll get out of the workshop.",
      "If you're bringing your own camera or other equipment, make sure you know how to operate them. This way, you can focus on learning new skills and techniques during the workshop, rather than figuring out how to use your equipment.",
      "The instructors at the workshop are experts in their field. Make sure to follow their advice and practice the techniques they demonstrate. This will help you get the most out of the workshop.",
      "If there are feedback sessions during the workshop, make sure to participate. This is a great opportunity to receive constructive criticism on your work and learn from others' perspective.",
      "Identify specific techniques or skills you want to improve during the workshop. Having clear goals will help you stay focused and motivated throughout the event.",
      "The workshop will likely follow a planned schedule. Be punctual and respect the timing of each session to ensure a smooth and productive workshop experience.",
      "If there's something you don't understand, don't hesitate to ask questions. The instructors are there to help you learn and grow.",
    ],
    coordinators: [
      {
        name: "M Hemanth",
        pno: "7995232738",
        _id: {
          $oid: "651d31dbdb52132424884f3e",
        },
      },
    ],
    images: [
      "https://fastly.picsum.photos/id/901/4016/4016.jpg?hmac=1rDqVF-p5zoRrKvKU1pHRho-8ervt8RaiXEccYvbRHg",
    ],
    prize_pool: "TBD",
  },
];

for (let event of events) {
  for (let coordinator of event.coordinators) {
    delete coordinator._id;
  }
}

// write events to file
fs.writeFileSync(path.join(__dirname, "events.json"), JSON.stringify(events));
