export type Project = {
  slug: string;
  title: string;
  index: string;
  year: string;
  location: string;
  type: string;
  status: string;
  area: string;
  cover: string;
  shortDescription: string;
  gallery: string[];
  statement: string;
  description: string[];
  credits: Array<[string, string]>;
  pdf?: string;
};

export const projects: Project[] = [
  {
    slug: 'vals-cultural-pavilion',
    title: 'Vals Cultural Pavilion',
    index: '01',
    year: '2026',
    location: 'Vals, Switzerland',
    type: 'Cultural',
    status: 'Concept',
    area: '4,850 m²',
    cover: 'images/projects/brutalist-cultural.jpg',
    shortDescription: 'A monolithic pavilion shaped by reflection, shadow and alpine mass.',
    gallery: [
      'images/projects/alpine-foundation.jpg',
      'images/projects/interior-detail.jpg',
      'images/projects/basalt-stair.jpg',
      'images/projects/courtyard-gallery.jpg'
    ],
    statement: 'A monolithic cultural pavilion embedded into the alpine landscape, organized around shadow, reflection and geological mass.',
    description: [
      'The project is conceived as a sequence of compressed and expanded spaces carved into a dark mineral plinth. Exterior walls frame landscape rather than objectify it, while the interior is guided by slow transitions in light.',
      'Material choices are deliberately restrained. Concrete, stone, dark metal and clear glass form a reduced palette that allows proportion, weather and occupation to define the atmosphere.'
    ],
    credits: [
      ['Lead architect', 'Studio Name'],
      ['Landscape', 'Collaborator'],
      ['Structure', 'Engineer Name'],
      ['Photography', 'Studio Archive']
    ]
  },
  {
    slug: 'courtyard-gallery',
    title: 'Courtyard Gallery',
    index: '02',
    year: '2025',
    location: 'Copenhagen, Denmark',
    type: 'Gallery',
    status: 'Completed',
    area: '1,920 m²',
    cover: 'images/projects/courtyard-gallery.jpg',
    shortDescription: 'A protected courtyard calibrating a sequence of gallery light.',
    gallery: [
      'images/projects/interior-detail.jpg',
      'images/projects/brutalist-cultural.jpg',
      'images/projects/alpine-foundation.jpg'
    ],
    statement: 'A quiet gallery organized around a protected courtyard and a carefully calibrated sequence of interior light conditions.',
    description: [
      'The building is treated as a thick perimeter around an open center. Visitors move between introverted rooms and framed views into the courtyard, creating a measured alternation between exhibition and pause.',
      'Openings are deliberately sparse and deep. Their proportions make the wall thickness legible and turn daylight into part of the exhibition architecture.'
    ],
    credits: [['Architect', 'Studio Name'], ['Photography', 'Studio Archive']]
  },
  {
    slug: 'basalt-house',
    title: 'Basalt House',
    index: '03',
    year: '2026',
    location: 'Prishtina, Kosovo',
    type: 'Residential',
    status: 'In progress',
    area: '620 m²',
    cover: 'images/projects/basalt-stair.jpg',
    shortDescription: 'A residential study in weight, enclosure and warm interior light.',
    gallery: [
      'images/projects/interior-detail.jpg',
      'images/projects/basalt-stair.jpg',
      'images/projects/brutalist-cultural.jpg'
    ],
    statement: 'A residential study in weight, enclosure and warm interior light, defined by a sculptural stone stair at its center.',
    description: [
      'The house is organized as a set of staggered rooms around a vertical circulation core. The stair is both movement and object, anchoring the interior while allowing views to pass around it.',
      'A dark exterior shell contrasts with lighter internal surfaces and timber elements, reinforcing the transition from public landscape to private interior.'
    ],
    credits: [['Architect', 'Studio Name'], ['Interior', 'Studio Name']]
  },
  {
    slug: 'alpine-foundation',
    title: 'Alpine Foundation',
    index: '04',
    year: '2024',
    location: 'Graubünden, Switzerland',
    type: 'Institutional',
    status: 'Study',
    area: '3,100 m²',
    cover: 'images/projects/alpine-foundation.jpg',
    shortDescription: 'A low foundation building following the terrain through framed views.',
    gallery: [
      'images/projects/alpine-foundation.jpg',
      'images/projects/courtyard-gallery.jpg',
      'images/projects/interior-detail.jpg'
    ],
    statement: 'A low, linear foundation building that follows the terrain and creates a sequence of framed alpine views.',
    description: [
      'The project is kept intentionally horizontal, allowing the surrounding topography to remain dominant. Internal spaces are arranged along a long circulation line with moments of compression and release.',
      'The architecture is quiet and robust, using a small number of durable materials and precise openings rather than expressive form.'
    ],
    credits: [['Architect', 'Studio Name'], ['Landscape', 'Collaborator']]
  }
];
