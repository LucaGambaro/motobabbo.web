
import { NavItem, ScheduleItem, HighlightItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Programma', href: '#programma' },
  { label: 'Solidarietà', href: '#solidarieta' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contatti', href: '#contatti' },
];

export const SCHEDULE: ScheduleItem[] = [
  {
    time: '11:00',
    activity: 'Apertura punto accoglienza',
    description: 'Ci troviamo in Piazza Martiri a Mirano per il raduno e il kit di benvenuto (fino ad esaurimento).'
  },
  {
    time: '14:30',
    activity: 'Inizio schieramento',
    description: 'I motobabbi iniziano a prepararsi per il momento più magico della giornata.'
  },
  {
    time: '15:00',
    activity: 'Partenza Motosfilata',
    description: 'Inizia la 23° edizione! Un serpentone rosso attraverserà le vie della città.'
  },
  {
    time: '15:30',
    activity: 'Arrivo a Chirignago',
    description: 'Accoglienza a Casa Nazareth con le autorità e un momento di gioia con i bambini.'
  }
];

export const HIGHLIGHTS: HighlightItem[] = [
  {
    title: 'Moto, emozione e solidarietà!',
    content: 'Questi sono i 3 elementi che da sempre contraddistinguono il Motobabbo. Un unico grande obiettivo: i bambini di Casa Nazareth.',
    imageUrl: 'https://images.unsplash.com/photo-1543589077-47d81606c1ad?q=80&w=1000&auto=format&fit=crop',
    buttonText: 'LA NOSTRA MISSIONE'
  },
  {
    title: 'Oltre 2.500 moto presenti!',
    content: 'Oltre 20 anni fa eravamo un ristretto numero di amici. Oggi siamo un progetto che conta migliaia di partecipanti da tutta Italia.',
    imageUrl: 'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?q=80&w=1000&auto=format&fit=crop',
    buttonText: 'VIDEO MOTOSFILATA'
  }
];
