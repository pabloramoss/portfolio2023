import Reveal from './Reveal';

interface Props {
  title: string;
  divider?: 'left' | 'right';
}
const SectionTitle: React.FC<Props> = ({ title, divider = 'right' }) => {
  return (
    <Reveal>
      <div className={`flex items-center gap-4 ${divider === 'left' && 'flex-row-reverse'}`}>
        <h2 className="text-4xl font-bold whitespace-nowrap">{title}</h2>
        <div className="h-[1px] w-full bg-slate-500" />
      </div>
    </Reveal>
  );
};

export default SectionTitle;
