// navBar: 
// navbarBrand: LOGO
// navLink: Links
// hoverStyles: Hover Effects
// navbarCollapse: the container holding the navlinks and button on small screens
// navbarNav: the drop down menu styles on small screens
// navbarToggler: the dropdown menu button on small screens

const styles = {
    home: {
      navbar: {
        fontStyle: 'normal',
        color: 'var(--dark)',
      },
      navbarBrand: {
        fontFamily: 'var(--font-family-code)',
        fontWeight: 800,
        color: 'var(--dark)',
        transition: 'var(--transition-text-shadow)',
      },
      navLink: {
        fontFamily: 'var(--font-family-secondary)',
        // fontWeight: 600,
        color: 'var(--dark)',
        transition: 'var(--transition-text-shadow)',
      },
      hoverStyles: {
        color: 'var(--yellow)',
        textShadow: 'var(--text-shadow-yellow)',
      },
      navbarCollapse: {

      },
      navbarNav: {

      },
      navbarToggler: {
        
      }
    },
    homeSmall: {
      navbar: {
        fontStyle: 'normal',
        color: 'var(--dark)',
      },
      navbarBrand: {
        fontFamily: 'var(--font-family-code)',
        fontWeight: 800,
        color: 'var(--dark)',
        transition: 'var(--transition-text-shadow)',
      },
      navLink: {
        fontFamily: 'var(--font-family-secondary)',
        borderBottom: '1px solid var(--yellow)',
        color: 'var(--dark)',
        transition: 'var(--transition-text-shadow)',
      },
      hoverStyles: {
        color: 'rgb(var(--rgb-rose))',
        textShadow: 'var(--text-shadow-hover)'
      },
      navbarCollapse: {
        display: "flex",
        justifyContent: "end",
        paddingRight: ".5rem",
        textAlign: "center"
      },
      navbarNav: {
        maxWidth: 100,
        paddingLeft: '1rem',
        paddingRight: '1rem',
        backgroundColor: 'rgba(var(--rgb-yellow), 0.9)',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        boxShadow: 'var(--box-shadow)'
      },
      navbarToggler: {
        
      }
},
    about: {
      navbar: {
        fontStyle: 'normal',
        backgroundColor: 'rgba(var(--rgb-dark), .9)'
      },
      navbarBrand: {
        fontFamily: 'var(--font-family-code)',
        fontWeight: 800,
        color: 'var(--rose)',
        transition: 'var(--transition-text-shadow)',
      },
      navLink: {
        fontFamily: 'var(--font-family-secondary)',
        // fontWeight: 600,
        color: 'var(--rose)',
        transition: 'var(--transition-text-shadow)',
      },
      hoverStyles: {
        color: 'var(--yellow)',
        textShadow: 'var(--text-shadow-yellow)',
      },
        navbarCollapse: {

        },
        navbarNav: {
          
        },
        navbarToggler: {
        
        }
    },
    aboutSmall: {
      navbar: {
        fontStyle: 'normal',
        color: 'var(--dark)',
        backgroundColor: 'rgba(0,0,0,0)'
      },
      navbarBrand: {
        fontFamily: 'var(--font-family-code)',
        fontWeight: 800,
        color: 'var(--dark)',
        transition: 'var(--transition-text-shadow)',
      },
      navLink: {
        fontFamily: 'var(--font-family-secondary)',
        borderBottom: '1px solid var(--yellow)',
        color: 'var(--dark)',
        transition: 'var(--transition-text-shadow)',
      },
      hoverStyles: {
        color: 'rgb(var(--rgb-rose))',
        textShadow: 'var(--text-shadow-hover)'
      },
      navbarCollapse: {
        display: "flex",
        justifyContent: "end",
        paddingRight: ".5rem",
        textAlign: "center"
      },
      navbarNav: {
        maxWidth: 100,
        paddingLeft: '1rem',
        paddingRight: '1rem',
        backgroundColor: 'rgba(var(--rgb-yellow), 0.9)',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        boxShadow: 'var(--box-shadow)'
      },
      navbarToggler: {
        
      }
    },
    projects: {
        navbar: {
          fontStyle: 'normal',
          backgroundColor: 'rgba(var(--rgb-dark), .9)'
        },
        navbarBrand: {
          fontFamily: 'var(--font-family-code)',
          fontWeight: 800,
          color: 'var(--rose)',
          transition: 'var(--transition-text-shadow)',
        },
        navLink: {
          fontFamily: 'var(--font-family-secondary)',
          // fontWeight: 600,
          color: 'var(--rose)',
          transition: 'var(--transition-text-shadow)',
        },
        hoverStyles: {
          color: 'var(--yellow)',
          textShadow: 'var(--text-shadow-yellow)',
        },
        navbarCollapse: {

        },
        navbarNav: {
          
        },
        navbarToggler: {
        
        }
    },
    projectsSmall: {
      navbar: {
        fontStyle: 'normal',
        // color: 'var(--rose) !important',
        backgroundColor: 'rgba(0,0,0,0)'
      },
      navbarBrand: {
        fontFamily: 'var(--font-family-code)',
        fontWeight: 800,
        color: 'var(--rose)',
        transition: 'var(--transition-text-shadow)',
      },
      navLink: {
        fontFamily: 'var(--font-family-secondary)',
        borderBottom: '1px solid var(--yellow)',
        color: 'var(--dark)',
        transition: 'var(--transition-text-shadow)',
      },
      hoverStyles: {
        color: 'var(--rose)',
        textShadow: 'var(--text-shadow-hover)'
      },
      navbarCollapse: {
        display: "flex",
        justifyContent: "end",
        paddingRight: ".5rem",
        textAlign: "center"
      },
      navbarNav: {
        maxWidth: 100,
        paddingLeft: '1rem ',
        paddingRight: '1rem',
        backgroundColor: 'rgba(var(--rgb-yellow), 0.9)',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        boxShadow: 'var(--box-shadow)'
      },
      navbarToggler: {
        backgroundColor: 'var(--yellow)'
      }
    },
    contact: {
        navbar: {
          fontStyle: 'normal',
          color: 'var(--dark)',
          backgroundColor: 'var(--rose)'
        },
        navbarBrand: {
          fontFamily: 'var(--font-family-code)',
          fontWeight: 800,
          color: 'var(--dark)',
          transition: 'var(--transition-text-shadow)',
        },
        navLink: {
          fontFamily: 'var(--font-family-secondary)',
          // fontWeight: 600,
          color: 'var(--dark)',
          transition: 'var(--transition-text-shadow)',
        },
        hoverStyles: {
          color: 'var(--yellow)',
          textShadow: 'var(--text-shadow-yellow)',
        },
        navbarCollapse: {

        },
        navbarNav: {
          
        },
        navbarToggler: {
        
        }
    },
    contactSmall: {
      navbar: {
        fontStyle: 'normal',
        color: 'var(--dark)',
        backgroundColor: 'rgba(0,0,0,0)'
      },
      navbarBrand: {
        fontFamily: 'var(--font-family-code)',
        fontWeight: 800,
        color: 'var(--dark)',
        transition: 'var(--transition-text-shadow)',
      },
      navLink: {
        fontFamily: 'var(--font-family-secondary)',
        borderBottom: '1px solid var(--yellow)',
        color: 'var(--dark)',
        transition: 'var(--transition-text-shadow)',
      },
      hoverStyles: {
        color: 'rgb(var(--rgb-rose))',
        textShadow: 'var(--text-shadow-hover)'
      },
      navbarCollapse: {
        display: "flex",
        justifyContent: "end",
        paddingRight: ".5rem",
        textAlign: "center"
      },
      navbarNav: {
        maxWidth: 100,
        paddingLeft: '1rem',
        paddingRight: '1rem',
        backgroundColor: 'rgba(var(--rgb-yellow), 0.9)',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        boxShadow: 'var(--box-shadow)'
      },
      navbarToggler: {

      }
    }
  
};

export default styles;