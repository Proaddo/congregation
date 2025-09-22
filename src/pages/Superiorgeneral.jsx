import React from 'react';
import superiorGeneralImage from '../assets/superior-general.jpg';

const SuperiorGeneralMessage = () => {
  return (
    <div className="font-serif bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-16 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            "You are the light of the world"
          </h1>
          <p className="text-xl md:text-2xl">
            Message from the Superior General
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Image Section */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative w-full max-w-xs">
              <div className="aspect-w-3 aspect-h-4 w-full group">
                <img
                  src={superiorGeneralImage}
                  alt="Sr Rose Celine BS, Superior General"
                  className="w-full h-full object-contain rounded-lg shadow-xl border-2 border-transparent group-hover:border-4 group-hover:border-blue-700 transition-all duration-300 "
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-gray-900">Sr Rose Celine BS</h3>
                <p className="text-gray-600">Superior General</p>
              </div>
            </div>
          </div>

          {/* Message Section */}
          <div className="lg:w-2/3 bg-white p-8 rounded-xl shadow-lg">
            <blockquote className="border-l-4 border-blue-600 pl-6 mb-8">
              <p className="text-xl italic text-gray-700">
                "You are the light of the world… Let your light so shine that the people see your good works and give glory to your Father in heaven."
              </p>
              <footer className="mt-2 text-gray-600">— Matthew 5:14a,16</footer>
            </blockquote>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Trusting in the providence of God, Mgr Raymond FC Mascarenhas Servant of God started a small institute named The Congregation of the Sisters of the Little Flower of Bethany, on July 21, 1921 which has become a light to the world. It was founded with the power of Jesus with a view to proclaim the compassionate love of God to all the people.
              </p>

              <p>
                The Bethany story that started with four nuns has now 1383 members in 6 countries of the world diffusing the light of knowledge, healing, reconciliation, caring, empowering people of all categories, especially women and children irrespective of caste, creed or colour.
              </p>

              <p>
                Communication is the basic component of getting connected with the people world wide. It is an art of sharing to establish a common bond with others to create a network of world family. A website is of immense advantage to the life of the Congregation to stay connected.
              </p>

              <p>
                I am glad to welcome the viewers of the website of Bethany Congregation. It provides valuable information about the various events and the mission. May I invite the viewers to join hands with our Congregation in our mission of bringing God's love, peace and joy to the people all over the world.
              </p>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-right font-bold text-gray-900">Sr Rose Celine BS</p>
                <p className="text-right text-gray-600">Superior General</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prayer Section */}
      <div className="bg-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Prayer for the Congregation</h2>
          <p className="text-lg text-gray-700 italic mb-4">
            "May the Lord continue to bless the Sisters of the Little Flower of Bethany as they carry forth the light of Christ to all nations."
          </p>
          <p className="text-gray-600">— Prayer of the Faithful</p>
        </div>
      </div>
    </div>
  );
};

export default SuperiorGeneralMessage;