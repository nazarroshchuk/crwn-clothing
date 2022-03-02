import React from "react";
import MenuItem  from "../menu-item/menu-item.component";
import './directoty.styles.scss';
import { useSelector } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";



export const Directory = () => {

 const sections = useSelector(selectDirectorySections);
        return (
            <div className="directory-menu">
                {sections.map(({ title, imageUrl, id, size, linkUrl })=> (
                    <MenuItem
                        key={id}
                        title={title}
                        imageUrl={imageUrl}
                        size={size}
                        linkUrl={linkUrl}
                    />
                ))}
            </div>
        )

}