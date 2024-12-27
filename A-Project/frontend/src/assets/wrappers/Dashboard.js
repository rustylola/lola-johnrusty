import styled from 'styled-components';

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  .dashboard-page > section{
    box-shadow: var(--shadow-2);
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
    .dashboard-page > section{
      box-shadow: var(--shadow-2);
    }
  }
`;
export default Wrapper;
