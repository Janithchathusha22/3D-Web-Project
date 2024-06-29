

export const Statistics = () => {
  interface statsProps {
    quantity: string;
    description: string;
  }

  const stats: statsProps[] = [
    {
      quantity: "10+",
      description: "Team",
    },
    {
      quantity: "25+",
      description: "Brands",
    },

    {
      quantity: "9",
      description: "Industries",
    },
    {
      quantity: "50+",
      description: "Successful Cases",
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ quantity, description }: statsProps) => (
          <div
            key={description}
            className="space-y-2 text-center py-5 bg-emerald-900 rounded-full" 
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">{quantity}</h2>
            <p className="text-lg text-gray-50 font-semibold">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
