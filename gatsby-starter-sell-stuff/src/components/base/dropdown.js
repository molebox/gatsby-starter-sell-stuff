import React, { useState } from 'react';
import { Box, Link, Flex, Text } from 'theme-ui';
import {Link as GatsbyLink} from 'gatsby';

// https://css-tricks.com/solved-with-css-dropdown-menus/

// https://blog.logrocket.com/building-a-custom-dropdown-menu-component-for-react-e94f02ced4a1/

const Dropdown = ({title, categories}) => {
    const [visibility, setVisibility] = useState({
        visibility: 'hidden',
        opacity: 0,
        display: 'none',
    });

    const onMouseOver = () => {
        setVisibility({
            visibility: 'visible',
            opacity: 1,
            display: 'block'
        })
    }
    const onMouseLeave = () => {
        setVisibility({
            visibility: 'hidden',
            opacity: 0,
            display: 'none',
        })
    }

    return (
        <Flex>
        <Text sx={{ fontSize: [3, 4] }} sx={{ my: 3 }} onMouseEnter={onMouseOver}onMouseLeave={onMouseLeave}>
          {title}
        </Text>
        <Box
        as="ul"
        sx={{
            listStyle: 'none',
            visibility: visibility.visibility,
            opacity: visibility.opacity,
            position: 'absolute',
            transition: 'all .5s ease',
            display: visibility.display,
        }}
        >
        {categories.map((category, index) => {
          const numberOfProducts = category.products.length
            ? category.products.length
            : 0;
          return (
            <Box
            as="li"
              key={index}
              sx={{ 
                  display: 'block',
                  width: "max-content",
                  p: 1,
                  position: 'relative',
                  transitionDuration: '0.5s'
                }}
            >
              <Link
                as={GatsbyLink}
                to={`/category/${category.slug.current}`}
                activeClassName="active"
                variant="linkEffect"
                sx={{
                  fontSize: [3, 4],
                }}
              >
                {category.title}
              </Link>
              <Text
                as="p"
                variant="styles.h2"
                sx={{
                  m: 3,
                }}
              >
                - {numberOfProducts}
              </Text>
            </Box>
          );
        })}
        </Box>
        </Flex>
    )
}

export default Dropdown;