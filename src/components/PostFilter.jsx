import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";


const PostFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
                placeholder="Suchleiste..." />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                defaultValue="Sortieren nach"
                options={[
                    { value: 'title', name: 'Nach Name' },
                    { value: 'body', name: 'Nach Beschreibung' }
                ]}
            />
        </div>
    );
};

export default PostFilter;