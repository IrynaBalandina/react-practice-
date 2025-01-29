

const Section = ({title, children}) => {
  return ( 
   <section style = {{width:"960px", margin:"o auto"}}>
     <h2>{title}</h2>
     {children}
      </section>
  );
};

export default Section;