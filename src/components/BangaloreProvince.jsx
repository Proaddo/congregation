// src/components/BangaloreProvince.jsx
import React, { useState, useEffect } from 'react';
import ConventCard from './ConventCard';
import ConventModal from './ConventModal';
import SearchBar from './SearchBar';
import ProvinceHeader from './ProvinceHeader';
import ProvinceStats from './ProvinceStats';
import LoadingSpinner from './LoadingSpinner';

// Import all convent images
import convent1 from '../assets/convents/convent1.jpg';
import convent2 from '../assets/convents/convent2.jpg';
import convent3 from '../assets/convents/convent3.jpg';
import convent4 from '../assets/convents/convent4.jpg';
import convent5 from '../assets/convents/convent5.jpg';
import convent6 from '../assets/convents/convent6.jpg';
import convent7 from '../assets/convents/convent7.jpg';
import convent8 from '../assets/convents/convent8.jpg';
import convent9 from '../assets/convents/convent9.jpg';
import convent10 from '../assets/convents/convent10.jpg';
import convent11 from '../assets/convents/convent11.jpg';
import convent12 from '../assets/convents/convent12.jpg';
import convent13 from '../assets/convents/convent13.jpg';
import convent14 from '../assets/convents/convent14.jpg';
import convent15 from '../assets/convents/convent15.jpg';
import convent16 from '../assets/convents/convent16.jpg';
import convent17 from '../assets/convents/convent17.jpg';
import convent18 from '../assets/convents/convent18.jpg';
import convent19 from '../assets/convents/convent19.jpg';

const BangaloreProvince = () => {
  const [convents, setConvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedConvent, setSelectedConvent] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    // Simulating API fetch with timeout
    setTimeout(() => {
      setConvents([
        {
          id: 1,
          title: "Bethany Provincial House Bangalore",
          description: "The provincial house serves as the administrative center for the Bangalore Province. It coordinates all activities and serves as the residence for the provincial superior and council members.",
          history: `Way back in the 1970s Bangalore and Belgaum regions were set up for better animation and administration. Sr M Theresia was the first regional superior of Bangalore Region and Sr M Lucina that of Belgaum. Sisters Medela, Hyacinth and Esperie were subsequent regional superiors of Bangalore region. In 1980 Bangalore and Belgaum regions were merged to form the East Karnataka Region with Sr M Agnella as the regional superior.

The decision in XI General Chapter of the Congregation saw the birth of 5 Provinces (3 Provinces and 2 Vice Provinces). So Bangalore Province came into existence on 8th June 1986 with Sr M. Dymphna as the first Provincial Superior assisted by four councillors. It had a strength of 286 members in 24 communities. As the membership of Sisters, and the number of communities increased, Western Province was carved out of Bangalore Province in May 2006 taking out 22 communities with 162 members. Bangalore Province retained 19 communities with 170 members, spreading out in the dioceses of Chikmagalur, Shimoga, Mysore and Bangalore. The members are involved in educational, pastoral and social apostolates as well as hostel ministry and health care. Employment opportunities through vocational training centres are provided by Higher Education through P.U colleges. Centre for the differently abled and holistic health centres are the new initiatives. There are 4 PU Colleges, 11 High Schools, 16 Primary Schools, and 14 K.G Schools, one Non-formal education centre, 5 Hostels, 3 Vocational Training Centers, one Pilgrim Center, one Registered Trust 1, run by the Bangalore Province. Sisters serve in 3 Diocesan Schools. Sr Bonita is the present Provincial Superior assisted by Sr Susan, Sr Sahana, Sr Prescilla Fernandes and Sr Sharlet Rodrigues. Sr Therese is the Province Procurator. The Province is dedicated to the Sacred Heart of Jesus.

Bangalore Province under the patronage of the Most Sacred Heart of Jesus was solemnly erected by Mother Sylvine the then Super General on 8th June 1986. The baton of administration was passed on to Sr Dymphna by Sr Agnella, the outgoing Regional Superior. Sr Dymphna became the first Provincial Superior of the Bangalore Province. The Province consisted of twenty four houses spread over the archdiocese of Bangalore, Mumbai and Goa and the dioceses of Mysore, Chickmagalure, Shimoga, Bellary and Karwar. The membership of the province was 286. The first Provincial house was housed at Bethany convent Nandidurga, Bangalore. In the subsequent years Sr Felicia, Sr Bonita and Sr Lilitta were appointed Provincial Superiors of Bangalore province. On March 1st 1993 New Provincial house at Kammanahalli Bangalore was blessed by Fr Felix Punnakattuchery SAC and Sr Agnella, the then Superior General inaugurated the building. As the membership and communities increased Western Province was carved out of Bangalore Province in May 2006 taking out 22 communities with 162 members.

At present Sr M Bonita BS, is the Provincial Superior assisted by Sr M Susan BS, Asst. Provincial Superior and Sr M Sahana BS, Sr M Precilla Fernandes BS, Sr Sharlet Rodrigues BS, the Councillors and Sr M Therese BS, the Province Procurator.

Bethany Bangalore has 19 communities. Bangalore - 4, Shimoga - 4, Chikmagalur - 5, Mysore - 6.
Membership: The Province has a total of 195 Sisters rendering service in the Province, Central Delegation and in the Delegation Abroad. We have 5 Novices; 2 Pre-novices; 5 Student Candidates studying in Classes XI and XII and 5 candidates in 'Come and See' stage of formation, all hailing from Karnataka.

Dioceses where Sisters serve: Bangalore, Shimoga, Chikmagalur and Mysore.

Bethany Sisters in Bangalore Province are engaged in various ministries such as Educational, Pastoral and social apostolates as well as hostel ministry and health care. Employment opportunities through vocational training centers are provided through Higher Education via P.U colleges; centre for differently abled and holistic health centre are new initiatives. There are 4 PU Colleges, 11 High Schools, 16 Primary Schools and 14 K.G Schools, 1 Non-formal education, 5 Hostels, 3 Vocational training centers, one Pilgrim Center. Sisters also serve in 3 diocesan schools.`,
          image: convent1,
          address: "123 Church Road, Bangalore",
          contact: "080-12345678",
          established: "1950",
          activities: ["Administration", "Leadership", "Coordination"]
        },
        {
          id: 2,
          title: "St. Joseph’s Convent, Sagar",
          description: "Located in the serene town of Sagar, this convent runs a school and engages in various social outreach programs. The sisters focus on education and women empowerment.",
          history: `In the edges of the Western Ghats, in the district of Shimoga in Karnataka state, is a small tranquil town named Sagar. It was in 1950, the grace-filled year of the twin jubilee of the Founder, namely, the platinum jubilee of his birth and golden jubilee of his priestly ordination that Bethany made an entry into Sagar in the district of his birth place, Shimoga, in the diocese of Mysore.

Mother Petra, the Superior General, requested the permission of the Bishop of the diocese of Mysuru to open a community in Sagar. Most Rev Rene Feuga was happy to have the presence of the Bethany Sisters at Sagar. The five sisters – Sr Lazarus, the first Superior of the community, Sr Rita, Sr Clemence, Sr Gemma, Sr Presenta and Ms Maggi Bai, the helper, landed in Sagar on 16th May 1950. Rev. Fr Fulgence Lopez was the Parish Priest. The administration of St Joseph’s Primary School comprising standard I to IV was handed over to the Bethany Sisters on 23rd March 1950, Sr Lazarus as the Headmistress. In 1954, during the Marian Year, Nirmala High School was started. Sr Bertha was the first Headmistress of the school.

In 1987 a new chapel and later in 1990 a new convent building was constructed. Later when Sr Therese was the Superior, the ministry was extended by obtaining a site at Zanatha Galli to carry on the Social Work. Srs Venera and Grace jointly worked for the progress of the poor people of the area providing balawadi classes, tailoring classes and adult education. At St Joseph’s English Medium School a parallel section to the Kannada medium was started in 1969, Sr Pascalia being the first headmistress of both the schools.

At present Sr Sharlet Rodrigues BS is the Superior of the community and Sr Joyline, Sr Blanche, Sr Grace, Sr Norbertine, Sr Sharlet Rodrigues, Sr Praveen, Sr Bal Sumitra, Sr Deepti, Sr Molly Thomas, Sr Clemency, Sr Rexita, Sr Pramila D. Fernandes are the members.

Year of establishment: 17.05.1950.`,
          image: convent2,
          address: "St. Joseph's Road, Sagar",
          contact: "08183-234567",
          established: "1965",
          activities: ["Education", "Women Empowerment", "Social Outreach"]
        },
        {
          id: 3,
          title: "Mother of Mercy Convent, Gadenahally",
          description: "This convent is known for its healthcare initiatives in rural areas. The sisters run a dispensary and mobile medical units to serve remote villages.",
          history: `Gadenahalli is a vibrant village in Hassan District. Way back in 1950s Fr. KJ Thayil wrote to Mgr Raymond FC Mascarenhas, the Founder, of the possibilities of Bethany Sisters working in Gadenahalli. Mother Petra, the Superior General of Bethany, sought the permission from Most Rev Victor R Fernandes, the Bishop of Mangalore, to open a convent in Gadenahalli in the diocese of Mysuru. Most Rev. Bishop Rene Feuga in 1950 on 24th February invited the founder and the sisters to begin their mission.

In the beginning they took up the primary school and dispensary. Sr Philomen was appointed as Superior, Sr Louise, Sr Lucretia, Sr Philomelle, and Pullu Bai- helper, were the pioneers. Sr Genevieve who joined the community later, was appointed as Headmistress of the Primary school. In 1960, new convent chapel and dispensary were built and blessed by Auxiliary Bishop Albert V. D’Souza.

The dream of having a high school came true and Loyola High School was started on 4th July 1984 with 82 students. Sr Celesta was the High School Headmistress. In 2002, Karuna Matha Hostel was opened for the girls. On 21 November 2003, Loyola Composite Pre-University College was opened; Sr Louisia was the Principal of the college.

Sisters continue the educational, pastoral, health and hostel ministry. At present Sr Savitha is the Superior. Sr Colette, Sr Speciosa, Sr Trina, Sr Agnes Rita, Sr Victoria Lobo, Sr Ivilla, Sr Benita Gratia, Sr Marian, Sr Vasantha Rani, Sr Fatima Miranda, Sr Lidwin Rebello and Sr Daisy Maria Britto are the members of the community involved in different ministries of the parish and community.

Year of establishment: 20.05.1950.`,
          image: convent3,
          address: "Mercy Lane, Gadenahally",
          contact: "080-87654321",
          established: "1972",
          activities: ["Healthcare", "Mobile Clinics", "Nutrition"]
        },
        {
          id: 4,
          title: "Fatima Convent, Dornahally",
          description: "Situated in the countryside, Fatima Convent operates an orphanage and vocational training center for underprivileged youth. They specialize in tailoring and computer skills training.",
          history: `Dornahalli Parish is locally known as Christian Koppalu. Rev Fr R. F. C. Mascarenhas, the Founder of the Congregation, was in touch with the compassionate Pastor Rev. Fr I. H. Lobo, the Parish Priest of Dornahalli. He invited the Bethany Sisters to serve the people in their pastoral and economic needs. The Superior General, Mother Priscilla, sent three sisters to open a community on 21st May 1957. Sr Annunciata was appointed as Superior and Headmistress, and the members of the community were Sr Clare, one of the pioneers, Sr Xavier, and Maggi Bai. Fr Founder named the Convent as Fatima Convent in commemoration of the fortieth anniversary of Mother Mary’s apparition in Fatima on May 13th 1917, a historic event.

Sisters started their Pastoral and Educational activities. Sr Azella and Sr Venera were in charge of the St Antony’s Shrine and stall. The dispensary was opened in 1958 and Sr Mida was in charge of it. Rev. Fr Founder visited this rural area for the first time on 5th July 1959, making it holy by his presence. Good and genuine vocations have bloomed to Religious and Diocesan clergy due to the witnessing life of the Sisters.

At present, Sr Lorna is the Superior and Sr Madhu, Sr Lisia, Sr Mariline, Sr Canute, Sr Shanthi Clare, Sr Cecilia, and Sr Shilpa Bakhita Menezes are the members. Sisters continue their pastoral and educational apostolate with much zeal and vigour.

Year of establishment: 11.05.1957.`,
          image: convent4,
          address: "Fatima Street, Dornahally",
          contact: "08185-345678",
          established: "1980",
          activities: ["Orphanage", "Vocational Training", "Child Care"]
        },
        {
          id: 5,
          title: "St. Martha’s Convent, Mudigere",
          description: "This convent manages a boarding school for tribal children and runs agricultural training programs. The sisters help local farmers adopt sustainable farming techniques.",
          history: `Surrounded by dense green forest with tall and majestic trees, a third convent in Mysore diocese was opened on May 24th 1953 on the request of Fr Eduardo B. Noronha, the parish priest of Mudigere, who contacted Mgr Raymond Mascarenhas. Mother Petra, Superior General of Bethany, obtained permission to open the convent from Most Rev. Bishop Rene Feuga, the Bishop of Mysore. The convent was a memorial to Mother Martha, the first Superior General.

The pioneering members were Sr Francis, Sr Bartholomea, Sr Paupera, and Sr Laura. The house served as a classroom and boarding house as well as the residence for the sisters. Sr Francis was appointed as Superior for a short period, followed by Sr Pauline. There were no Catholic educational institutions for the children of poor estate labourers in and around Mudigere, so the institution began with a nursery class in Kannada medium on 1st June 1953 with 20 children. Permission was granted to commence the primary school on 30th May 1953, with Sr Sylvia appointed as the headmistress.

A boarding house was started with two children in 1953. St. Martha’s High School was inaugurated on 1st June 1989 by Most Rev. John Baptist Sequeira, Bishop of Chikmagaluru, with Sr Louisia as the High School Headmistress. On July 1st 2006, the Pre-University College was inaugurated by Sr Wilberta, the Superior General, and Sr Trina became the first principal.

At present, Sr M Reema BS is the Superior, and Sr Therese Clare, Sr Vineetha, Sr Louisia, Sr Vinette, Sr Maria Flora, Sr Veronica Menezes, Sr Pramila Fernandes, Sr Reema, Sr Helen Rebello, Sr Janet Santhumayor, and Sr Divya Lopis are members of the community.

Year of establishment: 24.05.1953.`,
          image: convent5,
          address: "Martha Road, Mudigere",
          contact: "08263-456789",
          established: "1975",
          activities: ["Tribal Education", "Agriculture", "Boarding School"]
        },
        {
          id: 6,
          title: "Bethany Convent, Bangalore",
          description: "Located in the heart of Bangalore, this convent focuses on urban ministry, running counseling centers and support groups for working professionals and students.",
          history: `Way back in the 1970s Bangalore and Belgaum regions were set up for better animation and administration. Sr M Theresia was the first regional superior of Bangalore Region and Sr M Lucina that of Belgaum. Sisters Medela, Hyacinth and Esperie were subsequent regional superiors of Bangalore region. In 1980 Bangalore and Belgaum regions were merged to form the East Karnataka Region with Sr M Agnella as the regional superior.`,
          image: convent6,
          address: "45 Convent Street, Bangalore",
          contact: "080-98765432",
          established: "1960",
          activities: ["Urban Ministry", "Counseling", "Support Groups"]
        },
        {
          id: 7,
          title: "St. Mary’s Convent, Arsikere",
          description: "This convent operates a well-known educational institution in the region. They offer education from primary to high school with excellent academic results.",
          history: `As per the expressed need of the people of Arsikere for an English Medium School through the Rotary Club, Mother Macrina, the then Superior General of the Congregation, responded positively and opened its branch at Arsikere on 31st December 1963. Sr Mida was appointed as the Superior, with Sr Lourdes (one of the four Founding members of the Bethany Congregation), Sr Dora, and Sr Olinda forming part of the pioneering team.

The community began in a rented building, sharing the space as both their residence and a kindergarten, which started on 2nd January 1964. Sisters were warmly welcomed by Rev. Fr Augustine D’Souza, the parish priest, along with parishioners and local leaders.

A new convent building was constructed and blessed on 16th May 1976. Later, an additional block was inaugurated on 28th December 2001 to accommodate guests and provide adequate space for the sisters.

At present, the sisters render their services in the educational apostolate from Kindergarten to PUC. In addition to their educational mission, they devote time to pastoral and social apostolates in keeping with the Charism of the Congregation. They assist in the parish church during liturgical and para-liturgical services, visit families of the sick and elderly, and engage with students and youth, continuing their service with love and dedication.

Year of establishment: 02.01.1964.`,
          image: convent7,
          address: "Mary Road, Arsikere",
          contact: "08173-567890",
          established: "1958",
          activities: ["Primary Education", "Secondary Education", "Academic Excellence"]
        },
        {
          id: 8,
          title: "Sacred Heart Convent, Basrikatte",
          description: "Nestled in the hills, this convent runs a retreat center and spiritual formation programs. They host spiritual retreats throughout the year.",
          history: `Sacred Heart Convent was opened at Basrikatte amidst the lush green hills and valleys, coffee and tea estates, and silvery streams by Mother Macrina, the then Superior General, at the request of Rev. Fr Edwin Pinto, the then parish priest of Basrikatte, and Rev. Alphonsus Mathias, Bishop of Chikmagalur. The primary purpose of starting the convent was to cater to the educational needs of the children and to catechize the people of the estates and sub-stations.

Sister Clemence was appointed as the first Superior, with Sr Euphrasia, Sr Peace, and Sr Flavia as pioneers. On 30th April 1965, Fr Edwin Pinto blessed the renovated building, and it was named Sacred Heart Convent after the patron of the parish.

On 1st June 1965, the sisters began classes in both English and Kannada medium. The school was later recognized and admitted to grant-in-aid in 1968, with only the Kannada medium continuing under aid. In addition to education, the sisters ran a dispensary, led by Sr Colette, a trained teacher and nurse, who also became Superior and Headmistress of the school.

In 2007, the Divya Jyothi Hostel for children was opened, enabling students from distant estates and villages to attend school more easily. At present, Sr Lydia serves as Superior and Headmistress, with Sr Dulcilita, Sr Margaret D’Souza, Sr Sunitha Lydia, and Sr Savitha Clare as community members.

Year of establishment: 24.04.1965.`,
          image: convent8,
          address: "Sacred Heart Circle, Basrikatte",
          contact: "08262-678901",
          established: "1985",
          activities: ["Retreats", "Spiritual Formation", "Meditation"]
        },
        {
          id: 9,
          title: "St. Joseph’s Convent, K.R.Nagar",
          description: "This convent is known for its innovative farming techniques and runs an agricultural research center. They help local farmers improve crop yields.",
          history: `St. Joseph’s Convent, K.R. Nagar took root in 1968 in response to the divine call through Rev. Fr Felix Tauro, Parish Priest of Dornahalli, who desired a Christian presence in K.R. Nagar. At his request, Mother Macrina, the then Superior General, sought permission from Rt. Rev. Mathias Fernandes, Bishop of Mysore, to establish a community in K.R. Nagar.

Sr Laeta, the first Superior, along with Sr Myrrah, Sr Celine, and Sr Dancilla, began their mission in a rented house provided by Mr. Y.K. Ramachandra Rao. Nursery classes began on 22nd May 1967, followed by the opening of the Primary English Medium School on 22nd May 1968 with 135 children. Sr Laeta served as the Headmistress.

A residence for the sisters was constructed and blessed in 1976 by Bishop Mathias Fernandes. The foundation for the school building was also laid to meet the growing educational needs of the area. By 1969, the school building was completed, providing space for classes from 2nd to 7th standard as student numbers increased. In 1988, a Kannada Medium Primary School was opened under the leadership of Sr Tina to serve less privileged children.

The sisters engaged not only in education but also in pastoral and social ministries, including catechism classes, prison ministry, and parish service. At present, Sr M Simon BS is the Superior.

Year of establishment: 09.07.1989.`,
          image: convent9,
          address: "Joseph Lane, K.R.Nagar",
          contact: "08223-789012",
          established: "1978",
          activities: ["Agricultural Research", "Farming Techniques", "Community Development"]
        },
        {
          id: 10,
          title: "Jyothi Nilaya, Bangalore",
          description: "Jyothi Nilaya serves as a home for senior sisters and a formation house for novices. It provides spiritual direction and vocational training.",
          history: `Mother Macrina, the Superior General, requested the Most Rev. D Simon Lourdusamy, the Archbishop of Bangalore, to permit the start of a Kannada Medium School in Bangalore. In response, on 5th July 1971 Jyothi Nilaya Community was opened at Kacharakanahalli. Fr Ullasappa Megalatti, parish priest of St. Pius X Church, Kammanahalli, blessed the convent, which was named Jyothi Nilaya. Sr Louise was appointed Superior, Sr Noella as Headmistress, and Sr Berchmans as a member.

In 1977, Jyothi High School was started with Sr Simplina as Headmistress. The convent building was blessed in 1983 by Fr Lazar D’Souza. On 20th January 1984, Jeevan Jyothi Home for aged and elderly sisters was opened. Jyothi Social Service Centre was also established to meet the needs of the local poor, with Sr Doreen and Sr Yvette serving there.

On 26th June 2002, Jyothi Pre-University College was inaugurated with Sr Georgina as Principal. That same year, an English Medium High School began, led by Sr Emil as Headmistress. The sisters of Jyothi Nilaya, true to its name, continue to spread the light of Christ through pastoral, educational, and social activities, especially for the least and the lost.

Year of establishment: 26.06.1971.`,
          image: convent10,
          address: "Light Street, Bangalore",
          contact: "080-23456789",
          established: "1990",
          activities: ["Retirement Home", "Novitiate", "Spiritual Direction"]
        },
        {
          id: 11,
          title: "Holy Cross Convent, Arsikere",
          description: "This convent specializes in healthcare with a well-equipped hospital serving the local community. They offer affordable medical care to all.",
          history: `In 1966 Fr Mathias Noronha, the parish priest of St Mary’s parish Arsikere, requested Mother Macrina, the Superior General of Bethany Congregation, to send sisters to St. Mary’s Parish School. Fr S.R Peter who succeeded Fr Noronha as the parish priest continued to request Mother Macrina. On their request Sr Joyette, Sr Anita and Maxim (postulant) were sent as assistant teachers. In 1971 Sr Anita took charge of the school as the Headmistress. On 15th September 1974 St Mary’s Kannada Medium School was handed over to the Bethany Educational Society. Sr Anitha, Sr Marita, Sr Mystica and Sr Jeevan moved to the convent building.

On 18th September 1975 Rev. Alphonsus Mathias, the Bishop of Chickmagalur blessed the convent. Sr Sheela was the superior and headmistress. The school was considered as the best Kannada school in Arsikere taluk in Hassan district, Karnataka. The sisters attended liturgical services, Legion of Mary and visited families. They strove hard to keep the Christian life active in the surrounding families by visiting them and catechizing them. At present Sr A. Jacintha is the Superior and Headmistress, Sr Scholastica, Sr Sandhya, Sr Juanita, Sr Saritha, and Sr Smitha are the members.`,
          image: convent11,
          address: "Cross Road, Arsikere",
          contact: "08173-890123",
          established: "15.05.1974",
          activities: ["Hospital", "Medical Care", "Community Health"]
        },
        {
          id: 12,
          title: "St. Antony’s Convent, Ponnampet",
          description: "Located in a coffee-growing region, this convent runs skill development programs for plantation workers and their families.",
          history: `Ponnampet is a beautiful village with sweet scented coffee estates and cascading waterfalls in South Kodagu District. Most Rev. Mathias Fernandez, the Bishop of Mysuru invited the Bethany Sisters to Ponnampet to impart education to the children of the locality. Mother Gemma, the Superior General, Mother Macrina, the former Superior General and Sr Verena, the Procurator General, accompanied the pioneers, Sr Eliza, Sr Clita, Sr Prabha, Sr Elize D’Souza and Sr Jessy Leena to Ponnampet on 21st May 1979. The school started functioning from 22nd May 1979. Most Rev. Mathias Fernandes blessed and laid the foundation stone for the convent building on 30th August 1979. Sr Prabha was the Headmistress.

The Convent building was blessed and inaugurated on 28th January 1981 by Most Rev. Mathias Fernandes. Mother Sylvine, the Superior General, Sr. Ann Teresa and Sr Noreen, her Councillors graced the occasion. The construction of the new convent building was blessed by Bishop Rt. Rev. Thomas Vazhapilly and inaugurated by Sr Lilitta, the Provincial Superior on 27th August 2015. At present Sr Tina is the Superior, Sr Melvina, Sr Gratina, Sr Marie Amy, Sr Arogya Fernandes and Sr Bhakthi Prabha are the members.`,
          image: convent12,
          address: "Antony Street, Ponnampet",
          contact: "08272-901234",
          established: "01.06.1979",
          activities: ["Skill Development", "Plantation Workers", "Vocational Training"]
        },
        {
          id: 13,
          title: "St. Mary’s Convent, Kutta",
          description: "This convent manages an eco-friendly farm and environmental education center. They promote sustainable living in the Western Ghats region.",
          history: `The little town of Kutta is in Kodagu, covered with coffee estates all over. Most Rev. Mathias Fernandes, the Bishop of Mysore requested Mother Gemma to open a convent at Kutta in 1979, for the educational as well as pastoral apostolate. Sr Eliza, Sr Mathutina and Sr Josia were the pioneers. Sr Josia was appointed as the Headmistress of St Mary’s School Kutta.

On November 29th 1981 Most Rev. Bishop Mathias Fernandes blessed and inaugurated the convent building. In 1983 a new school building was constructed. Sr Prudentia was appointed as Superior of the community and Headmistress of the school.

The presence of Sisters has helped in the faith formation of the people of Kutta and also to improve their educational standard. The school is a real boon to the poor people of this place. At present Sr Margaret Pannakar is the Superior and Headmistress. Sr Elizabeth, Sr Rita Zita Alva, Sr Reshma Lynet D’Souza, and Sr Clarita are the members.`,
          image: convent13,
          address: "Mary Garden, Kutta",
          contact: "08272-012345",
          established: "02.07.1979",
          activities: ["Eco-Farming", "Environmental Education", "Conservation"]
        },
        {
          id: 14,
          title: "Bethany Convent, Bogadi",
          description: "Specializing in special education, this convent runs a school for differently-abled children and provides therapy services.",
          history: `Mother Sylvine, the then Superior General, and Sr Dymphna, the then Provincial Superior of Bangalore Province, felt the need to open a study house in Mysore Diocese for the Sisters to pursue their studies in various disciplines, in the Manasa Gangothri University Mysore. Most Rev. Francis Michealappa, the Bishop of Mysore, blessed the building on 9 July 1989. Sr Leata and Sr Misericors became the pioneers of this new community, engaging themselves in the socio-pastoral ministry in the surrounding area. The house served the needs of the sisters for their spiritual and academic pursuits.

Another purpose of establishing Bethany Convent, Bogadi, was to provide for the formation of various groups of Sisters. From 1993-2007 the house accommodated the formation of ‘Come and See’ candidates.

The General Chapter held in 2004 directed the Administration to have Inter-Province Formation Houses. Thus the third Novitiate house of the Congregation for the Novices belonging to Western and Bangalore Provinces was canonically erected on 16th June 2007 by Most Rev. Thomas Vazhapilly, the Bishop of Mysore.

Sr Jyoti, the Superior General, Sr Bonita, the Provincial Superior of Bangalore Province, Sr Rose Ann, the Provincial Superior of Western Province with their councillors were present. 13 novices were initiated to the Novitiate on 15th June 2007. Bethany Novitiate community from 2007-2016 has catered to 8 batches of novices, numbering 100 of them, under the guidance of Sr Clarina, the Novice Directress and Sr Sharlet Mendonca, Sr Precilla Braggs, Sr Ranjitha, Sr Simprose and Sr Veena Laveena as assistant directresses successively.

At present there are nine, II year novices; Sr M Veena BS is the Superior & Novice Directress, Sr Veena Laveena, the assistant, and Sr Laeta, Sr Gracilda and Sr Anil, as members of the community.`,
          image: convent14,
          address: "Bogadi Road, Mysore",
          contact: "0821-1234567",
          established: "09.07.1989",
          activities: ["Special Education", "Therapy", "Inclusive Programs"]
        },
        {
          id: 15,
          title: "Bethany Convent, Kable",
          description: "This convent focuses on rural development with programs in water conservation, organic farming, and women's self-help groups.",
          history: `Bethany Convent, Kable, is situated on the Western Ghat slopes along the Sahyadri Mountain ranges of Malnad. In 1990, Most Rev. Bishop Ignatius Pinto, the Bishop of Shivamogga, requested Mother Sylvine to open a convent to serve the parish school, take up evangelization, and engage in social work. Following the Bishop's direction, Fr Philip, the parish priest, constructed the convent building. On 4th August 1990, the new community was opened in the Diocese of Shivamogga. Sr Brigitte was appointed as the Superior of the community and Headmistress of St Francis Xavier’s Primary School, with Sr Irene and Sr Madhu as pioneers. Sr Irene was fully engaged in pastoral apostolate.

Free boarding was started on 1st June 1993 by the diocese, and the sisters took care of the boarding children. In 2003, the Sisters had their own convent building blessed by Bishop Gerald Isaac Lobo on 6th May 2003 and inaugurated by Sr Virginia, one of the General Councillors. The Sisters remain actively involved in educational, pastoral, and hostel ministry in St Francis Xavier’s Church, Kable.

At present, Sr M Carmelita BS is the Superior and Headmistress of the school. Sr Lucilda, Sr Matilda Rego, Sr Sundari Philomen, and Sr Velangani Sigeon are the members.`,
          image: convent15,
          address: "Kable Village Road",
          contact: "08282-2345678",
          established: "04.08.1990",
          activities: ["Water Conservation", "Organic Farming", "Women Empowerment"]
        },
        {
          id: 16,
          title: "Seva Sadan, Doddabelavangala",
          description: "Seva Sadan serves as a rehabilitation center for women and children in distress, providing counseling, vocational training, legal aid, and community outreach programs.",
          history: `Seva Sadan, Doddabelavangala, is located in Doddaballapur Taluk, a bustling town in Bangalore Rural District, Karnataka. In response to the XI General Chapter of the Congregation held in 1986, the sisters ventured into social action. Mother Sylvine, the Superior General, requested Fr Claude D’Souza S.J. to orient the sisters into social work. On 8th September 1988, the Sisters arrived at Doddabelavangala along with Sr Nora, the General Councillor. Fr Joseph Moolkara CMF, the Parish Priest of St Peter’s Church, Doddaballapur, blessed the sisters’ residence and offered the Eucharistic celebration. Sr Agnesia was appointed as the Superior, with Sr Susheela, Sr Praveen, Ms Leena D’Mello, and Ms Mabel as pioneers of the mission.

The new house was blessed on 10th June 1992 and named Seva Sadan. The Sisters became actively involved in pastoral work in the parish at Doddaballapur. Over time, Seva Sadan grew into a motivating and guiding force in Bangalore Rural District. Religious and social activists visited Seva Sadan to experience village life, and the Sisters extended their programs to 60 villages.

Key initiatives included organizing programs for persons with disabilities, empowering women through self-help groups and vocational skills, running a mobile clinic, and establishing a special school for mentally challenged children. The Sisters have continuously adapted to changing needs and remain committed to serving their target communities.`,
          image: convent16,
          address: "Service Road, Doddabelavangala",
          contact: "08151-3456789",
          established: "08.09.1988",
          activities: ["Rehabilitation", "Legal Aid", "Vocational Training"]
        },
        {
          id: 17,
          title: "Bethany Convent, Shimoga",
          description: "Affiliated with St. Joseph's in Sagar, this convent runs educational programs, pastoral outreach, and a community health initiative in Shimoga district.",
          history: `Father Founder had a deep love for Shimoga, his birthplace. Bethany long dreamed of having a community here. Sr Jyoti, the Superior General, expressed this desire to Most Rev. Gerald Isaac Lobo, who was installed as Bishop of Shimoga on 20th March 2004. The Bishop invited the Sisters to take charge of RC Boy’s School in Sacred Heart Cathedral, Shimoga. In 2005, a community was established at Bapuji Nagar in a rented house. Sr Molly was appointed as the Superior of the community and Headmistress of RC Boy’s School, Sr Evelyn became the Headmistress of Sacred Heart English Medium School, and Sr Maxim took up pastoral work in the parish.
In 2006, Sr Prescilla Fernandes was appointed as Coordinator for the Women’s Commission of the Diocese and also took on social apostolate work at Chaitanya Diocesan Social Work Centre (SMSSS). In 2015, the community shifted to Vidyanagar to another rented house. That same year, the convent was affiliated with St. Joseph Convent, Sagar.
At present, Sr Evelyn is in charge of the community, with Sr Flora and Sr Anthony Mary as members. The Sisters remain engaged in prayer ministry, pastoral outreach through family visits, teaching catechism in the parish, and cultivating the community’s land.`,
          image: convent17,
          address: "Convent Road, Shimoga",
          contact: "08182-4567890",
          established: "30.05.2005",
          activities: ["Education", "Community Health", "Outreach"]
        },
        {
          id: 18,
          title: "Jeevan Jyothi Ashram, Mankale",
          description: "This ashram serves as a spiritual retreat center, home for meditation, and hub for education and vocational training. They offer contemplative prayer courses, holistic health programs, and free schooling for local children.",
          history: `Mgr Raymond F. C. Mascarenhas was deeply inspired by the vision of preaching the Gospel to the poor. Sr Medela, serving as Regional Superior and Superior of St. Joseph’s Convent, Sagar, played a key role in acquiring land at Mankale. Most Rev. Alphonsus Mathias, the Bishop of Chikmagalur, blessed the land and laid the foundation stone. Later, Fr Augustine Fernandez blessed the completed building. It was named Jeevan Jyothi Ashram—a home for poor children, providing free accommodation and education. Sr Bernadette, Sr Nives, and Sr Gonzaga were the pioneers, accommodating 25 children.

On 5th June 2004, the Bethany Vocational Training Centre, with hostel facilities, was blessed by Bishop Gerald Isaac Lobo and inaugurated by Sr Jyoti, the Superior General. On 6th September 2005, the Jeevan Jyothi community was canonically erected as an independent community, with Bishop Gerald Isaac Lobo celebrating the Eucharist. The founding members were Sr Winnifred, Sr Eucharia, Sr Flora, and Sr Elvira.

Bethany Nursery School was opened in 2006 to provide English-medium education for local children. On 14th September 2015, St. Joseph’s High School was inaugurated by Sr Lillis, the Assistant Superior General, and blessed by Bishop Francis Serrao of Shimoga. Sr Ivilla became the first Headmistress. At present, Sr M Deena BS serves as Superior, with Sr Merlyn, Sr Priyalatha, Sr Carmelita, and Sr Meena as community members.`,
          image: convent18,
          address: "Peace Lane, Mankale",
          contact: "08282-5678901",
          established: "05.07.2004",
          activities: ["Retreats", "Meditation", "Holistic Health"]
        },
        {
          id: 19,
          title: "Bethany Convent, Madikeri",
          description: "Located in the hill station of Madikeri, this convent runs a guest house, offers educational services in English and Kannada medium schools, and organizes environmental conservation programs.",
          history: `Madikeri, the district headquarters of Kodagu, became home to the Sisters of the Northern Province of the Congregation as they sought a base in south-western India to promote vocations for the missionary areas of North India. Sr Agnella, the Superior General, approached Fr Gregorious Madapilly and Mgr Joseph Thelly, the Administrator of the Diocese of Mysore, who warmly welcomed Bethany to the Coorg deanery.
On 24th May 1995, Sr Salerine, Sr Mary Pinto, Sr Shirley, and Lina, along with Sr Agnella, Sr Miriam (Provincial Superior of Northern Province), and Mother Macrina, arrived in Madikeri to begin their educational ministry. A convent building was constructed and blessed by Fr Gregorious, parish priest of St Michael’s Church. Sr Salerine was appointed Superior and Headmistress of St Michael’s English Primary School, with sisters assisting her in both educational and pastoral activities.
On 23rd January 1998, Most Rev. Joseph Roy, Bishop of Mysuru, blessed the new convent building. At the request of Fr Arogyasamy, the Sisters also took charge of the Kannada Medium School, with Sr Arun Cutinha as Headmistress. In 2006, the convent was transferred to Bangalore Province, and Sr Smitha became Superior and Headmistress of the English Medium School. In 2007, the “Come and See” programme began in Madikeri under the direction of Sr Lorna.
At present, Sr Praveen BS serves as Superior, with Sr Ida, Sr Gliseria, and Sr Carmen as members of the community.`,
          image: convent19,
          address: "Hill View Road, Madikeri",
          contact: "08272-6789012",
          established: "24.05.1995",
          activities: ["Guest House", "Eco-Tourism", "Conservation"]
        }
      ]);
      setIsLoading(false);
    }, 1500);
  }, []);

 const filteredConvents = convents.filter(convent => {
    const matchesSearch = convent.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        convent.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        (convent.history && convent.history.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (activeFilter === 'all') return matchesSearch;
    
    if (activeFilter === 'education') {
      return matchesSearch && (
        convent.title.includes('School') || 
        convent.title.includes('Convent') || 
        convent.description.includes('education') || 
        (convent.activities && convent.activities.some(a => a.includes('Education')))
      );
    }
    
    if (activeFilter === 'healthcare') {
      return matchesSearch && (
        convent.description.includes('health') || 
        convent.description.includes('medical') || 
        (convent.activities && convent.activities.some(a => a.includes('Health')))
      );
    }
    
    if (activeFilter === 'social') {
      return matchesSearch && (
        convent.description.includes('social') || 
        convent.description.includes('outreach') || 
        convent.description.includes('community') || 
        (convent.activities && convent.activities.some(a => a.includes('Social')))
      );
    }
    
    return matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <ProvinceHeader />
      
      <ProvinceStats convents={convents} />
      
      <SearchBar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {filteredConvents.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700">No convents found matching your search</h3>
              <p className="text-gray-500 mt-2">Try different search terms or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {filteredConvents.map(convent => (
                <ConventCard 
                  key={convent.id} 
                  convent={convent} 
                  onClick={() => setSelectedConvent(convent)}
                />
              ))}
            </div>
          )}
        </>
      )}
      
      {selectedConvent && (
        <ConventModal 
          convent={selectedConvent} 
          onClose={() => setSelectedConvent(null)} 
        />
      )}
      
      <footer className="mt-16 text-center text-gray-600 py-6 border-t">
        <p>© {new Date().getFullYear()} Bangalore Province, Bethany Congregation</p>
        <p className="mt-2">All information is for educational purposes only</p>
      </footer>
    </div>
  );
};

export default BangaloreProvince;