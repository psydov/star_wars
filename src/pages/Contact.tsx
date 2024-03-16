import React, { useEffect, useState } from 'react'
import { BASE_URL, month, navItems } from '../utils/constants';
import { withHeroId } from '../hoc/withHeroId';

const Contact = () => {
  const [planets, setPlanets] = useState<string[]>([]);
  
  const fetchPlanets = async() => {
    const response = await fetch(`${BASE_URL}/v1/planets`);
    const data: {name: string}[] = await response.json();
    const planets: string[] = data.map(({ name }) => name);
    // const planets = data.map(planet => planet.name)
    // console.log(planets);
    setPlanets(planets);
    const info = {
      payload: planets,
      time: Date.now()
    };
    localStorage.setItem('planets', JSON.stringify(info));
  }

  useEffect(() => {
    const planets = JSON.parse(localStorage.getItem('planets')!);
    planets && (Date.now() - planets.time < month) ?
      setPlanets(planets.payload) :
      fetchPlanets();
    console.log(localStorage.getItem('planets'));
  }, []);
  
  return (
    <form className='d-flex flex-column' onSubmit={e => e.preventDefault()}>
      <label> First Name:
        <input type='text' name='firstName' placeholder='Your name...' />
      </label>
      <label> Planet:
        <select name='planet'>
          {planets.map((planetName, index) => (
            <option key={index} value={planetName}>{planetName}</option>
          ))}
        </select>
      </label>
      <label>Subject
        <textarea name='subject' placeholder='Write something...' />
      </label>
      <button className='w-25' type='submit'>Send Form</button>
    </form>
  )
}

export default withHeroId(navItems[3].route)(Contact);