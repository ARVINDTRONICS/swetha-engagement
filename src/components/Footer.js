import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Thank you and hope you'll join us !</h2>
        <ul className="copyright">
          <li>
            &copy; Built with Gatsby by{' '}
            <a target="_blank" href="https://www.linkedin.com/in/arvindkumarts">
              Arvind Thoppe !
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
