export interface VideosType { id: number; url: string; title: string; description: string; thumbnail: string }

export const videos: VideosType[] = [
  {
    id: 22,
    url: 'https://www.youtube.com/watch?v=r4pzwhi81kk',
    title: 'Video 22',
    description: 'Description 22',
    thumbnail: 'https://i.ytimg.com/vi/r4pzwhi81kk/hqdefault.jpg',
  },
  {
    id: 1,
    url: 'https://www.youtube.com/watch?v=IJc6AJz-TGk', 
    title: 'Video 1',
    description: 'Description 1',
    thumbnail: 'https://i.ytimg.com/vi/IJc6AJz-TGk/hqdefault.jpg',
  }, {
    id: 2,
    url: 'https://www.youtube.com/watch?v=SjNYZ1xdkCc', 
    title: 'Video 2',
    description: 'Description 2',
    thumbnail: 'https://i.ytimg.com/vi/SjNYZ1xdkCc/hqdefault.jpg',
},
  {
    id: 3,
    url: 'https://www.youtube.com/watch?v=mD7t9Tq4_Lw', 
    title: 'Video 3',
    description: 'Description 3',
    thumbnail: 'https://i.ytimg.com/vi/mD7t9Tq4_Lw/hqdefault.jpg',
  },
  {
    id: 4,
    url: 'https://www.youtube.com/watch?v=x6w52CqRO3s', 
    title: 'Video 4',
    description: 'Description 4',
    thumbnail: 'https://i.ytimg.com/vi/x6w52CqRO3s/hqdefault.jpg',
  },
  {
    id: 5,
    url: 'https://www.youtube.com/watch?v=001fE_DdcIA', 
    title: 'Video 5',
    description: 'Description 5',
  thumbnail: 'https://i.ytimg.com/vi/001fE_DdcIA/hqdefault.jpg',  
  },
  {
    id: 6,
    url: 'https://www.youtube.com/watch?v=ZHd5r5AA4jU', 
    title: 'Video 6',
    description: 'Description 6',
    thumbnail: 'https://i.ytimg.com/vi/ZHd5r5AA4jU/hqdefault.jpg',
  },
  {
    id: 7,
    url: 'https://www.youtube.com/watch?v=atkL1Cjprhc', 
    title: 'Video 7',
  description: 'Description 7',
  thumbnail: 'https://i.ytimg.com/vi/atkL1Cjprhc/hqdefault.jpg',
},
  {
    id: 8,
    url: 'https://www.youtube.com/watch?v=h3M4bm2EveM', 
    title: 'Video 8',
    description: 'Description 8',
    thumbnail: 'https://i.ytimg.com/vi/h3M4bm2EveM/hqdefault.jpg',
  },
  {
    id: 9,
    url: 'https://www.youtube.com/watch?v=vZ27XZwOrEI', 
    title: 'Video 9',
  description: 'Description 9',
  thumbnail: 'https://i.ytimg.com/vi/vZ27XZwOrEI/hqdefault.jpg',
},
  {
    id: 10,
    url: 'https://www.youtube.com/watch?v=uAxaUo96RP4', 
    title: 'Video 10',
    description: 'Description 10',
    thumbnail: 'https://i.ytimg.com/vi/uAxaUo96RP4/hqdefault.jpg',
  },  
];
export interface CoursesType { id: number; thumb: string; title: string; enrolled: number; videos: VideosType[] }
export const courses: CoursesType[] = [
    {
      id: 1,
      thumb: "https://cdn.ostad.app/course/cover/2024-11-07T13-34-17.205Z-Untitled-1%20(18).jpg", // Placeholder image URL
      title: "Python, Django & React",
    enrolled: 1200,
    videos: [...videos]
    },
    {
      id: 2,
      thumb: "https://cdn.ostad.app/course/cover/2024-12-19T15-48-52.487Z-Full-Stack-Web-Development-with-Python,-Django-&-React.jpg", // Placeholder image URL
      title: "Data Science & Machine Learning with Python for Beginners",
      enrolled: 850,
      videos: [...videos]
    },
    {
      id: 3,
      thumb: "https://cdn.ostad.app/course/cover/2024-12-18T15-24-44.114Z-Untitled-1%20(21).jpg", // Placeholder image URL
      title: "Database of the Web",
      enrolled: 450,
      videos: [...videos]
    },
  ];
