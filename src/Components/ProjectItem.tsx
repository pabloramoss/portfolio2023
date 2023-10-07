import Image from 'next/image';

interface Props {
  title: string;
  description: string;
  image: string;
  url: string;
  github: string;
  tech: string[];
}

const ProjectItem: React.FC<Props> = ({ title, description, image, url, github, tech }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-zinc-800 dark:border-gray-700 grid">
      <a className="flex justify-center" href={url} target="_blank">
        <img alt="" className="rounded-t-lg" src={image} />
      </a>
      <div className="p-5 flex flex-col justify-between">
        <div>
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
          <div className="pb-4 whitespace-break-spaces flex flex-wrap">
            {tech.map((tech) => (
              <span
                key={tech}
                className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500 uppercase whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <a
          className="justify-center inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-green-700 rounded-lg hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-300 dark:hover:bg-green-400 dark:focus:ring-green-300"
          href={url}
          target="_blank"
        >
          Demo
          <svg
            aria-hidden="true"
            className="w-3.5 h-3.5 ml-2"
            fill="none"
            viewBox="0 0 14 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5h12m0 0L9 1m4 4L9 9"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
