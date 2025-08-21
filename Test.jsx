
import { UserIcon, SearchIcon } from '@heroicons/react/solid';

const TestPage = () => {
    const trustMembers = [
        { name: 'Sri T. Satish U Pai', post: 'President' },
        { name: 'Dr. Ranjan R Pai', post: 'Member' },
        { name: 'Mr. H. S. Ballal', post: 'Member' },
        { name: 'Lt. Gen. (Dr) M.D. Venkatesh', post: 'Member' },
        { name: 'Dr. Narayana Sabhahit', post: 'Member' },
        { name: 'Sri CA. Varadaraya Pai', post: 'Member' },
        { name: 'Prof. Vanitha Maiya', post: 'Principal/Secretary' },
    ];

    const governingMembers = [
        { name: 'Sri T. Satish U Pai', post: 'President' },
        { name: 'Dr. Ranjan R Pai', post: 'Member' },
        { name: 'Mr. H. S. Ballal', post: 'Member' },
        { name: 'Lt. Gen. (Dr) M.D. Venkatesh', post: 'Member' },
        { name: 'Dr. Narayana Sabhahit', post: 'Member' },
        { name: 'Sri CA. Varadaraya Pai', post: 'Member' },
        { name: 'Prof. Vanitha Maiya', post: 'Principal/Secretary' },
    ];

    const collegeCouncil = [
        { mem: 'Prof. Vanitha Maiya, M.Com' },
        { mem: 'Mrs. Shailaja H, M.Sc., M.Phil.' },
        { mem: 'Dr. Vasumathi Bhat , M.A., Ph.D' },
        { mem: 'Dr. Vishwanath Pai M, B.E (C.S.), CNE, M.Sc. (IT), M.Phil., Ph.D.' },
        { mem: 'Dr. Puthi Vasanth Kumar,. M.A., M.Phil., Ph.D.' },
    ];

    // const [searchTerm, setSearchTerm] = useState('');

    // const filteredTrust = trustMembers.filter(member =>
    //   member.name.toLowerCase().includes(searchTerm.toLowerCase())
    // );

    return (
        <section className="relative min-h-[300px] flex items-center justify-center px-6 overflow-hidden">
            {/* Blurred Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center blur-sm scale-105"
                style={{ backgroundImage: "url('/Admin.JPG')" }}
            ></div>
            <div className="max-w-6xl mx-auto p-6 space-y-10 bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800">

                {/* Header */}
                <section className="relative text-center space-y-4">
                    <h1 className="text-3xl font-bold text-blue-700"> M.G.M. Management Committee</h1>
                    <p className="text-sm text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        The Mahatma Gandhi Memorial College is sponsored and administered by the Academy of General Education, Manipal.
                        The management of the College is vested in the Mahatma Gandhi College Trust, a registered body, having full control
                        over the affairs of the institution.
                    </p>
                </section>

                {/* Search Bar */}
                {/* <div className="flex items-center justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search Trust Members..."
            className="w-full pl-10 pr-4 py-2 border border-blue-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchIcon className="h-5 w-5 text-blue-500 absolute left-3 top-2.5" />
        </div>
      </div> */}

                {/* College Trust Cards */}
                <section>
                    <h2 className="relative text-xl flex items-center justify-center h-12 px-4 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold">College Trust</h2>
                    <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                        {trustMembers.map((member, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
                                <div className="flex items-center space-x-3">
                                    <UserIcon className="h-6 w-6 text-blue-500" />
                                    <h3 className="text-lg font-bold text-sky-600">{member.name}</h3>
                                </div>
                                <p className="text-sm text-gray-600 mt-1">{member.post}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Governing council */}
                <section>
                    <h2 className="relative text-xl flex items-center justify-center h-12 px-4 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold">Governing Council</h2>
                    <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        {governingMembers.map((member, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
                                <div className="flex items-center space-x-3">
                                    <UserIcon className="h-6 w-6 text-blue-500" />
                                    <h3 className="text-lg font-bold text-sky-600">{member.name}</h3>
                                </div>
                                <p className="text-sm text-gray-600 mt-1">{member.post}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* College Council Section */}
                <section>
                    <h2 className="relative text-xl flex items-center justify-center h-12 px-4 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold">College Council</h2>
                    <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        {collegeCouncil.map((member, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transitionn duration-300">
                                <div className="flex items-center space-x-3">
                                    <UserIcon className="h-6 w-6 text-blue-500" />
                                    <h3 className="text-lg font-bold text-sky-600">{member.mem}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </section>
    );
};

export default TestPage;
