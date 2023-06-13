import React, { useRef, useState } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const SearchBox = () => {
    const autocompleteRef = useRef(null);
    const [address, setAddress] = useState('');

    const handleSelect = async (value) => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        console.log('Selected Address:', value);
        console.log('Coordinates:', latLng);
    };

    return (
        <div className="relative">
            <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input
                            {...getInputProps({
                                placeholder: 'Search Places...',
                                className: 'autocomplete-input',
                            })}
                            className="absolute top-0 left-0 w-64 p-2 bg-white border border-gray-300 rounded shadow"
                        />
                        <div className="suggestions-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map((suggestion) => (
                                <div {...getSuggestionItemProps(suggestion)} key={suggestion.placeId}>
                                    {suggestion.description}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        </div>
    );
};

export default SearchBox;
