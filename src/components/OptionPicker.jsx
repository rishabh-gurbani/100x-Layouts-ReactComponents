import React from 'react'

export default function OptionPicker({name, options, size}) {

    const optionItems = options.map(option =>
        <option key={option} value={option}>{option}</option>
    );

    return ( 
    <fieldset className={"w-" + size + " mr-3 px-3 py-2 border border-neutral-500 rounded focus-within:border-twitter-blue group"}>
        <legend className="text-neutral-500 text-xs font-medium group-focus-within:text-twitter-blue">
            <div className="px-0.5  group-focus-within:px-1">
            {name}
            </div>
        </legend>
        <div className="flex justify-around w-full">
            <select name={name} className={"w-" +size+ " bg-inherit focus:outline-none focus:ring-0"}>
                {optionItems}
            </select>
        </div>
    </fieldset>
    );
}
