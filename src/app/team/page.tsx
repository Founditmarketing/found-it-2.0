import { Metadata } from 'next';
import TeamClient from './client';

export const metadata: Metadata = {
  title: 'Meet the Team | Found It Marketing',
  description: 'Small team, senior strategists. No hand-offs to interns. Based in Alexandria, LA.',
};

export default function Page() {
  return <TeamClient />;
}
