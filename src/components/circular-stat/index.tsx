export const CircularStat = ({ value }: { value: number }) => {
  const color = () => {
    if (value >= 0 && value < 50) {
      return 'stroke-red-500';
    } else if (value >= 50 && value < 90) {
      return 'stroke-orange-500';
    } else if (value >= 90 && value <= 100) {
      return 'stroke-green-500';
    }
  };
  return (
    <div className='flex justify-center'>
      <div className='w-20'>
        <svg viewBox='0 0 36 36' className={color()}>
          <path
            className='stroke-[2.5] stroke-zinc-400 fill-transparent'
            d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
          />
          <path
            className='stroke-[3] fill-transparent'
            strokeDasharray={`${value}, 100`}
            d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
          />
          <text
            x='18'
            y='20.35'
            className='text-[0.45em] [text-anchor:middle] stroke-[0.75]'
          >
            {value}%
          </text>
        </svg>
      </div>
    </div>
  );
};

type LighthouseScoresProps = { label: string; value: number }[];

export const LighthouseScores = ({ data }: { data: LighthouseScoresProps }) => {
  return (
    <div className='grid grid-cols-4'>
      {data.map((results) => {
        return (
          <div key={results.label} className='grid grid-cols-1 justify-center'>
            <CircularStat value={results.value} />
            <p className='text-center text-sm'>{results.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CircularStat;
