import classes from "./Footer.module.scss";
import { NavLink, useLocation } from "react-router-dom";

const linksFooter = [
  {
    title: "Company",
    data: [
      { title: "About Us", link: "/about" },
      { title: "Pricing", link: "/pricing" },
      { title: "Blog", link: "/blog" },
      { title: "Careers", link: "/careers" },
      { title: "Contact Us", link: "/contact-us" },
    ],
  },
  {
    title: "Support",
    data: [
      { title: "Help Center", link: "/help-center" },
      { title: "Safety Center", link: "/safety-center" },
      { title: "Community Guidelines", link: "/community-guidelines" },
    ],
  },
  {
    title: "Social Media",
    data: [
      { title: "Website", link: "https://buildwithangga.com/" },
      { title: "Instagram", link: "https://www.instagram.com/elements.bwa" },
      { title: "TikTok", link: "https://www.tiktok.com/@buildwithangga" },
      { title: "Facebook", link: "https://web.facebook.com/buildwithangga" },
    ],
  },
];

export const Footer = () => {
  const location = useLocation();

  return (
    <footer className={classes.footer}>
      <div className={classes.footer_top}>
        <div className={classes.top_left}>
          <svg
            width="161"
            height="32"
            viewBox="0 0 161 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45.517 25H57.3125V21.9574H49.2074V17.7898H56.6733V14.7472H49.2074V10.5881H57.2784V7.54545H45.517V25ZM63.7749 7.54545H60.1442V25H63.7749V7.54545ZM72.6491 25.2557C75.8878 25.2557 78.0696 23.679 78.581 21.25L75.223 21.0284C74.8565 22.0256 73.919 22.5455 72.7088 22.5455C70.8935 22.5455 69.7429 21.3438 69.7429 19.392V19.3835H78.6577V18.3864C78.6577 13.9375 75.9645 11.7386 72.5043 11.7386C68.652 11.7386 66.1548 14.4744 66.1548 18.5142C66.1548 22.6648 68.6179 25.2557 72.6491 25.2557ZM69.7429 17.1335C69.8196 15.642 70.9531 14.4489 72.5639 14.4489C74.1406 14.4489 75.2315 15.5739 75.2401 17.1335H69.7429ZM81.027 25H84.6577V17.142C84.6577 15.6932 85.5781 14.7301 86.7884 14.7301C87.9815 14.7301 88.7827 15.5483 88.7827 16.8352V25H92.3026V17.0057C92.3026 15.6506 93.0781 14.7301 94.3991 14.7301C95.5582 14.7301 96.4276 15.4545 96.4276 16.9119V25H100.05V16.196C100.05 13.358 98.3622 11.7386 95.9247 11.7386C94.0071 11.7386 92.5156 12.7188 91.9787 14.2188H91.8423C91.4247 12.7017 90.0866 11.7386 88.2884 11.7386C86.5241 11.7386 85.1861 12.6761 84.6406 14.2188H84.4872V11.9091H81.027V25ZM108.884 25.2557C112.122 25.2557 114.304 23.679 114.815 21.25L111.457 21.0284C111.091 22.0256 110.153 22.5455 108.943 22.5455C107.128 22.5455 105.977 21.3438 105.977 19.392V19.3835H114.892V18.3864C114.892 13.9375 112.199 11.7386 108.739 11.7386C104.886 11.7386 102.389 14.4744 102.389 18.5142C102.389 22.6648 104.852 25.2557 108.884 25.2557ZM105.977 17.1335C106.054 15.642 107.188 14.4489 108.798 14.4489C110.375 14.4489 111.466 15.5739 111.474 17.1335H105.977ZM120.892 17.4318C120.901 15.7443 121.906 14.7557 123.372 14.7557C124.83 14.7557 125.707 15.7102 125.699 17.3125V25H129.33V16.6648C129.33 13.6136 127.54 11.7386 124.812 11.7386C122.869 11.7386 121.463 12.6932 120.875 14.2188H120.722V11.9091H117.261V25H120.892V17.4318ZM139.154 11.9091H136.691V8.77273H133.06V11.9091H131.271V14.6364H133.06V21.4545C133.043 24.0199 134.79 25.2898 137.424 25.179C138.362 25.1449 139.026 24.9574 139.393 24.8381L138.822 22.1364C138.643 22.1705 138.259 22.2557 137.918 22.2557C137.194 22.2557 136.691 21.983 136.691 20.9773V14.6364H139.154V11.9091ZM152.224 15.642C151.9 13.2301 149.957 11.7386 146.65 11.7386C143.3 11.7386 141.093 13.2898 141.102 15.8125C141.093 17.7727 142.329 19.0426 144.886 19.554L147.153 20.0057C148.295 20.2358 148.815 20.6534 148.832 21.3097C148.815 22.0852 147.971 22.6392 146.701 22.6392C145.406 22.6392 144.545 22.0852 144.323 21.0199L140.752 21.2074C141.093 23.7131 143.224 25.2557 146.692 25.2557C150.085 25.2557 152.513 23.5256 152.522 20.9432C152.513 19.0511 151.278 17.9176 148.738 17.3977L146.369 16.9205C145.15 16.6562 144.698 16.2386 144.707 15.608C144.698 14.8239 145.585 14.3125 146.71 14.3125C147.971 14.3125 148.721 15.0028 148.9 15.8466L152.224 15.642ZM156.93 25.2216C158.021 25.2216 158.967 24.3097 158.976 23.1761C158.967 22.0597 158.021 21.1477 156.93 21.1477C155.805 21.1477 154.876 22.0597 154.885 23.1761C154.876 24.3097 155.805 25.2216 156.93 25.2216Z"
              fill="white"
            />
            <rect width="32" height="32" rx="10" fill="white" />
            <g clip-path="url(#clip0)">
              <path
                d="M26.9655 21.1425C26.9596 22.1358 26.4437 22.3573 26.4437 22.3573C26.4437 22.3573 17.5404 27.5019 16.9616 27.8243C16.388 28.0704 16.0047 27.8243 16.0047 27.8243C16.0047 27.8243 6.68873 22.4213 6.34872 22.1839C6.00862 21.9463 6.00059 21.5763 6.00059 21.5763C6.00059 21.5763 6.01001 10.8777 6.00059 10.3823C5.99126 9.88671 6.60952 9.51442 6.60952 9.51442L15.9177 4.13441C16.4907 3.83199 17.0486 4.13441 17.0486 4.13441C17.0486 4.13441 25.2714 8.91401 26.1826 9.42776C27.0758 9.85239 26.9655 10.7293 26.9655 10.7293C26.9655 10.7293 26.9711 20.2194 26.9655 21.1425ZM23.2492 10.4048C21.3434 9.30792 16.8536 6.7065 16.8536 6.7065C16.8536 6.7065 16.4156 6.46978 15.9657 6.7065L8.65779 10.9168C8.65779 10.9168 8.17231 11.2083 8.17968 11.596C8.18705 11.9837 8.17968 20.3566 8.17968 20.3566C8.17968 20.3566 8.1859 20.6462 8.45293 20.832C8.71996 21.0178 16.0341 25.2462 16.0341 25.2462C16.0341 25.2462 16.3351 25.439 16.7854 25.2462C17.2398 24.9939 24.2299 20.9678 24.2299 20.9678C24.2299 20.9678 24.6351 20.7943 24.6397 20.017C24.6411 19.7929 24.6416 18.9227 24.6416 17.8295L16.4118 22.8163V20.9086C16.4118 20.125 17.0185 19.6079 17.0185 19.6079L24.2978 15.2214C24.5725 14.9346 24.6292 14.475 24.6409 14.3012C24.6406 13.5044 24.6403 12.8083 24.6401 12.3673L16.4118 17.3532V15.3586C16.4118 14.5751 16.9318 14.2314 16.9318 14.2314L23.2492 10.4048Z"
                fill="#14295C"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect
                  width="20.97"
                  height="24"
                  fill="white"
                  transform="translate(6 4)"
                />
              </clipPath>
            </defs>
          </svg>
          <p>
            Element is a website that can help developers design websites
            without coding (easy-to-use & faster).
          </p>
        </div>
        <div className={classes.top_right}>
          {linksFooter.map((data) => (
            <div key={data.title}>
              <h5>{data.title}</h5>
              <ul>
                {data.data.map((d) => (
                  <li key={d.link}>
                    {data.title.toLowerCase() === "social media" ? (
                      <a href={d.link} target="_blank" rel="noreferrer">
                        {d.title}
                      </a>
                    ) : (
                      <a
                        className={
                          location.pathname === d.link ? classes.active : ""
                        }
                        href={d.link}
                      >
                        {d.title}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.footer_bottom}>
        <p>© 2021 Elements by BuildWith Angga. All rights reserved.</p>
        <ul>
          <li>
            <NavLink to="/privacy-policy" activeClassName={classes.active}>
              Privacy & Policy
            </NavLink>
          </li>
          <li>
            <NavLink to="/terms" activeClassName={classes.active}>
              Terms
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};