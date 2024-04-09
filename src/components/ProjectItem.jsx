const ProjectItem = ({ img, title, technologies, link }) => {
    return (
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
            {/* Image container with fixed height and image contained within */}
            <div className='w-full h-64 overflow-hidden rounded-xl group-hover:opacity-10'> {/* Fixed height */}
                <img src={img} alt={title} className='w-full h-full object-contain' /> {/* object-contain will scale the image to fit */}
            </div>
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
                    {title}
                </h3>
                <p className='pb-4 pt-2 text-white text-center'>{technologies}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg px-10'>More Info</p>
                </a>
            </div>
        </div>
    );
};


export default ProjectItem;
