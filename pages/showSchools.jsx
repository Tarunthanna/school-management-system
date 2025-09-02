import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCity, setFilterCity] = useState('');
  const [filterState, setFilterState] = useState('');

  useEffect(() => {
    fetchSchools();
  }, []);

  const fetchSchools = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/schools');
      if (response.ok) {
        const data = await response.json();
        setSchools(data);
      } else {
        setError('Failed to fetch schools');
      }
    } catch (error) {
      console.error('Error fetching schools:', error);
      setError('Failed to fetch schools');
    } finally {
      setLoading(false);
    }
  };

  // Get unique cities and states for filters
  const cities = [...new Set(schools.map(school => school.city).filter(Boolean))];
  const states = [...new Set(schools.map(school => school.state).filter(Boolean))];

  // Filter schools based on search and filters
  const filteredSchools = schools.filter(school => {
    const matchesSearch = school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         school.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = !filterCity || school.city === filterCity;
    const matchesState = !filterState || school.state === filterState;
    
    return matchesSearch && matchesCity && matchesState;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading schools...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>All Schools - School Management System</title>
        <meta name="description" content="Browse all schools in the system" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <h1 className="text-3xl font-bold text-gray-900">All Schools</h1>
                <p className="text-gray-600 mt-1">
                  Discover and explore schools in our system
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/addSchool"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Add New School
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="md:col-span-2">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                  Search Schools
                </label>
                <input
                  type="text"
                  id="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by name or address..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* City Filter */}
              <div>
                <label htmlFor="cityFilter" className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by City
                </label>
                <select
                  id="cityFilter"
                  value={filterCity}
                  onChange={(e) => setFilterCity(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Cities</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              {/* State Filter */}
              <div>
                <label htmlFor="stateFilter" className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by State
                </label>
                <select
                  id="stateFilter"
                  value={filterState}
                  onChange={(e) => setFilterState(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All States</option>
                  {states.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-4">
            <p className="text-gray-600">
              Showing {filteredSchools.length} of {schools.length} schools
            </p>
          </div>

          {/* Error Display */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
              <p className="text-red-700">{error}</p>
            </div>
          )}

          {/* Schools Grid */}
          {filteredSchools.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No schools found</h3>
              <p className="text-gray-500">
                {searchTerm || filterCity || filterState 
                  ? 'Try adjusting your search or filters'
                  : 'No schools have been added yet'
                }
              </p>
              {!searchTerm && !filterCity && !filterState && (
                <div className="mt-4">
                  <Link
                    href="/addSchool"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Add First School
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredSchools.map((school) => (
                <div key={school.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  {/* School Image */}
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                    {school.image ? (
                      <img
                        src={school.image}
                        alt={school.name}
                        className="w-full h-48 object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    
                    {/* Placeholder for schools without images */}
                    <div className={`w-full h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center ${school.image ? 'hidden' : 'flex'}`}>
                      <div className="text-center">
                        <svg className="mx-auto h-16 w-16 text-blue-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <p className="text-blue-600 text-sm font-medium">School Photo</p>
                        <p className="text-blue-500 text-xs">Click to add</p>
                      </div>
                    </div>
                  </div>

                  {/* School Info */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {school.name}
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p className="line-clamp-2">
                        <span className="font-medium">Address:</span> {school.address}
                      </p>
                      <p>
                        <span className="font-medium">City:</span> {school.city}
                      </p>
                      <p>
                        <span className="font-medium">State:</span> {school.state}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
