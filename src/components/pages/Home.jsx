const Home = () => {
    return (
        <div className="relative flex flex-col justify-center items-center font-gilroy-md text-charcoal bg-linear-to-t from-white to-violet-400 w-full min-h-screen p-10">
            {/* This below div is for the background setup using component*/}
            <div className="absolute inset-0"></div>
            <div className="relative z-10 flex justify-around">
                <div className="w-full flex flex-col justify-center items-start">
                    <h2 className="text-5xl font-extrabold mr-2">
                        Budget <span className="text-violet-700">Matrix</span>
                    </h2>
                    <p className="text-3xl max-w-90 font-semibold mt-12">
                        Take Control of Your Finances with{" "}
                        <span className="text-violet-500">Budget Matrix</span>
                    </p>
                    <p className="text-md mt-8 max-w-100">
                        Budget Matrix is a powerful and intuitive expense
                        tracking platform designed to help you monitor spending,
                        manage budgets, and gain complete visibility into your
                        financial habits—all in one place.
                    </p>
                </div>
                <div className="w-[70%]">
                    <img src="/1.png" alt="" />
                </div>
            </div>
            <div className="mt-10 mb-10">
                <p className="text-4xl font-bold">
                    Clarity. Control. Confidence.
                </p>
                <p className="text-xl">
                    Track every expense, categorize your spending, and make
                    smarter financial decisions with real-time insights and
                    structured budgeting tools built for everyday use.
                </p>
            </div>
            <div className="relative flex flex-col justify-around items-center gap-4 mb-10">
                <svg
                    width="100"
                    height="80"
                    viewBox="0 0 122 97"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute transform rotate-270 -bottom-10 -right-1"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M116.102 0.0996005C114.952 0.334095 112.7 1.53002 111.433 2.53834C110.869 2.98388 109.368 4.15635 108.077 5.11778C103.455 8.6352 102.61 9.40903 102.187 10.4877C101.39 12.5982 102.798 14.5914 105.097 14.5914C106.13 14.5914 108.241 13.7941 109.696 12.8561C110.424 12.3871 111.01 12.0823 111.01 12.1526C111.01 12.692 107.796 17.8274 106.2 19.8206C102.023 25.0733 95.6642 29.6928 86.2548 34.2889C81.0926 36.8214 77.4555 38.2753 73.9123 39.2367C71.7066 39.823 70.6507 39.9871 67.9053 40.0809C66.0516 40.1513 64.5499 40.1747 64.5499 40.1278C64.5499 40.0809 64.808 38.9788 65.1365 37.6891C65.465 36.3993 65.8404 34.1716 66.0047 32.7647C66.4505 28.3796 65.4884 24.2994 63.4704 22.2359C62.1564 20.8758 60.9363 20.3599 59.0121 20.3599C57.6043 20.3599 57.1115 20.4537 55.7975 21.1103C52.8878 22.5407 50.5648 25.9878 49.5089 30.4197C48.453 34.922 49.2742 38.0877 52.3481 41.1127C53.4744 42.2148 54.46 42.9183 55.9852 43.6921C57.1584 44.2549 58.1439 44.7473 58.1909 44.7708C58.5898 45.0053 54.5304 53.4705 52.0666 57.6211C47.4674 65.3125 39.3486 74.575 30.5728 82.0789C22.2427 89.2309 16.7285 92.4435 9.87677 94.1553C8.28116 94.554 7.13138 94.6478 4.2452 94.6478C1.17131 94.6712 0.608154 94.7181 0.608154 95.023C0.608154 95.234 1.19478 95.5857 2.13337 95.9609C3.54126 96.4768 3.96363 96.5472 7.41296 96.5237C10.5572 96.5237 11.4724 96.4299 13.1149 96.0078C21.7265 93.6863 31.1594 87.1908 42.6102 75.7006C49.2977 69.0175 52.5828 64.9373 56.1494 58.9343C58.0501 55.7217 60.6312 50.6801 61.7575 47.9365L62.5553 45.9902L64.0806 46.1543C71.3547 46.9047 77.7136 45.3101 88.3667 40.034C96.2274 36.1414 101.976 32.3426 106.505 28.0748C108.617 26.0816 111.855 22.2828 112.794 20.7117C113.028 20.313 113.286 19.9847 113.357 19.9847C113.427 19.9847 113.662 20.782 113.873 21.72C114.084 22.6814 114.647 24.276 115.093 25.2609C115.82 26.8085 116.008 27.043 116.454 26.9727C116.876 26.9258 117.228 26.4333 117.956 24.9795C119.317 22.2828 119.833 20.2661 120.772 13.8879C121.757 7.25168 121.781 4.4143 120.889 2.56179C119.95 0.615488 118.12 -0.322489 116.102 0.0996005ZM60.7016 25.7767C61.4525 26.9023 61.8279 29.2942 61.6637 31.9205C61.4759 34.7813 60.5139 38.9788 60.0681 38.9788C59.5284 38.9788 57.1584 37.6422 56.2198 36.8214C54.8354 35.6021 54.3426 34.2889 54.5538 32.2957C54.8589 29.2473 56.1964 26.2223 57.5808 25.3547C58.7306 24.6512 60.0681 24.8388 60.7016 25.7767Z"
                        fill="currentColor"
                    />
                </svg>
                <h2 className="text-2xl font-semibold">
                    Everything You Need to Manage Your Money
                </h2>
                <p>
                    Budget Matrix combines simplicity with powerful
                    functionality to give you a seamless financial tracking
                    experience.
                </p>
                <div id="Icons" className="relative flex flex-col gap-3">
                    <div className="flex justify-center gap-10">
                        <div className="flex gap-2 badge badge-dash p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-banknote-arrow-down-icon lucide-banknote-arrow-down"
                            >
                                <path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" />
                                <path d="m16 19 3 3 3-3" />
                                <path d="M18 12h.01" />
                                <path d="M19 16v6" />
                                <path d="M6 12h.01" />
                                <circle cx="12" cy="12" r="2" />
                            </svg>
                            <p>Expense Tracking</p>
                        </div>
                        <div className="flex gap-2 badge badge-dash p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-chart-column-stacked-icon lucide-chart-column-stacked"
                            >
                                <path d="M11 13H7" />
                                <path d="M19 9h-4" />
                                <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                                <rect
                                    x="15"
                                    y="5"
                                    width="4"
                                    height="12"
                                    rx="1"
                                />
                                <rect x="7" y="8" width="4" height="9" rx="1" />
                            </svg>
                            <p>Category Management</p>
                        </div>
                        <div className="flex gap-2 badge badge-dash p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-hand-coins-icon lucide-hand-coins"
                            >
                                <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                                <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                                <path d="m2 16 6 6" />
                                <circle cx="16" cy="9" r="2.9" />
                                <circle cx="6" cy="5" r="3" />
                            </svg>
                            <p>Budget Planning</p>
                        </div>
                    </div>
                    <div className="flex justify-center gap-10">
                        <div className="flex gap-2 badge badge-dash p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-search-icon lucide-search"
                            >
                                <path d="m21 21-4.34-4.34" />
                                <circle cx="11" cy="11" r="8" />
                            </svg>
                            <p>Search & Filters</p>
                        </div>
                        <div className="flex gap-2 badge badge-dash p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-database-zap-icon lucide-database-zap"
                            >
                                <ellipse cx="12" cy="5" rx="9" ry="3" />
                                <path d="M3 5V19A9 3 0 0 0 15 21.84" />
                                <path d="M21 5V8" />
                                <path d="M21 12L18 17H22L19 22" />
                                <path d="M3 12A9 3 0 0 0 14.59 14.87" />
                            </svg>
                            <p>Data Persistence</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h1>How It Works</h1>
                <h2>Simple Steps to Financial Awareness</h2>
                <p>
                    Start tracking your expenses in just a few steps and build
                    better financial habits over time.
                </p>
                <ul className="list-disc">
                    <li>Add your income and expenses</li>
                    <li>Categorize transactions</li>
                    <li>Monitor your dashboard </li>
                    <li>Adjust budgets based on insights</li>
                </ul>
            </div>
            <div>
                <h1>Why Choose Budget Matrix</h1>
                <p>
                    Designed for simplicity and efficiency, Budget Matrix
                    empowers users to take full control of their finances
                    without complexity.
                </p>
                <ul className="list-disc">
                    <li>Clean and intuitive interface</li>
                    <li>Fast performance with minimal setup</li>
                    <li>Scalable for future financial features</li>
                </ul>
            </div>
            <div>
                <h1>Call To Action</h1>
                <h2>Start Managing Your Finances Today</h2>
                <p>
                    Join Budget Matrix and take the first step toward financial
                    discipline and smarter money management.
                </p>
            </div>
            <svg
                width="60"
                height="60"
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 rotate-30 right-5"
            >
                <path
                    d="M37.149 167.26C33.2174 160.904 31.7143 153.342 32.9162 145.966L33.4836 142.484C34.8956 133.819 39.9157 126.159 47.2974 121.406L176.344 38.3134C187.473 31.1475 202.302 34.3448 209.49 45.4597L265.523 132.108C270.181 139.311 271.411 148.208 268.883 156.405C266.949 162.673 262.948 168.101 257.532 171.802L116.656 268.067C110.089 272.555 101.106 270.652 96.9218 263.888L37.149 167.26Z"
                    fill="#0C0C0A"
                />
                <rect
                    x="44.5664"
                    y="136.312"
                    width="180.443"
                    height="127.88"
                    rx="13.9501"
                    transform="rotate(-33.3684 44.5664 136.312)"
                    fill="#F8F4F0"
                />
                <path
                    d="M122.256 178.893C120.843 176.748 121.437 173.865 123.582 172.452L144.298 158.808C146.443 157.396 149.327 157.989 150.739 160.134L162.335 177.741L133.852 196.5L122.256 178.893Z"
                    fill="#8AB2F5"
                    stroke="black"
                    stroke-width="6.97503"
                />
                <path
                    d="M137.586 147.651C136.173 145.506 136.767 142.622 138.912 141.21L159.628 127.566C161.773 126.154 164.657 126.747 166.07 128.892L187.47 161.387L158.987 180.146L137.586 147.651Z"
                    fill="#F59772"
                    stroke="black"
                    stroke-width="6.97503"
                />
                <path
                    d="M147.104 110.887C145.691 108.743 146.285 105.859 148.43 104.446L169.147 90.8025C171.291 89.39 174.175 89.9836 175.588 92.1284L210.999 145.897L182.515 164.656L147.104 110.887Z"
                    fill="#F7C30E"
                    stroke="black"
                    stroke-width="6.97503"
                />
                <line
                    x1="119.485"
                    y1="208.851"
                    x2="226.023"
                    y2="138.101"
                    stroke="black"
                    stroke-width="6.97503"
                />
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="90"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-violet-500 absolute left-10 bottom-0 cursor-pointer hover:scale-110 transition-all duration-300"
            >
                <path d="M13 5H19V11" />
                <path d="M19 5L5 19" />
            </svg>
            <svg
                width="80"
                height="80"
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-15 right-150"
            >
                <path
                    d="M184.141 27.875L52.1984 117.269L59.0748 148.213L197.464 62.6872L202.192 49.364L184.141 27.875Z"
                    fill="#88B5FE"
                />
                <path
                    d="M180.731 21.3386C176.949 22.1408 143.025 44.604 79.9909 87.6966C73.1144 92.3956 65.3211 97.6675 62.6851 99.5013C56.7255 103.513 48.8175 112.108 47.213 116.234C44.6916 122.767 46.0669 134.227 54.0895 171.475C73.3436 260.296 73.802 262.015 79.7617 267.517C82.5123 270.153 102.912 278.061 106.809 278.061C111.05 278.061 124.344 270.153 158.497 247.46C178.325 234.166 198.725 220.871 203.768 217.891C222.563 206.66 242.505 192.563 247.204 187.406C252.591 181.446 254.768 175.716 254.768 167.349C254.768 160.817 243.766 120.475 231.273 81.5078C226.575 66.9526 221.99 52.3974 221.073 48.9591C220.042 45.5209 217.864 40.4781 216.26 37.6129C213.624 33.1432 211.905 31.8825 202.278 27.2982C189.785 21.4532 185.774 20.3071 180.731 21.3386ZM187.722 38.0714C189.212 38.9882 190.702 40.7073 191.161 41.7388C192.421 44.7186 195.287 56.0648 194.943 56.294C194.714 56.4086 187.608 61.1076 179.127 66.6087C170.646 72.2245 155.403 82.0808 145.317 88.7281C135.232 95.3754 118.728 106.149 108.643 112.796C98.5574 119.443 84.346 128.841 77.1257 133.654C69.9054 138.468 63.3727 142.708 62.5705 143.167C60.7367 144.313 57.6423 133.196 57.6423 125.403C57.6423 117.724 59.2468 115.432 67.6132 110.733C73.4582 107.409 127.553 71.6515 165.947 45.6355C173.511 40.4781 180.846 36.2376 182.336 36.2376C183.711 36.2376 186.118 37.0399 187.722 38.0714ZM204.799 86.8944C207.664 97.2091 213.165 116.119 216.947 128.956C220.73 141.906 224.397 156.347 225.085 161.275C226.689 172.507 225.314 175.601 215.572 181.561C200.902 190.5 117.238 246.658 109.216 252.847C100.735 259.494 92.5978 261.557 88.3573 258.233C87.2112 257.431 85.3775 251.471 83.4291 242.532C81.8246 234.624 78.9594 221.788 77.1257 213.88C67.8424 173.653 64.0604 154.972 65.0918 154.628C65.7795 154.398 71.9683 150.616 78.8448 146.032C85.8359 141.562 94.7753 135.717 98.9012 133.081C122.281 118.068 157.237 95.2608 176.262 82.7685C188.181 74.8605 198.381 68.3279 198.725 68.3279C199.183 68.3279 201.819 76.6943 204.799 86.8944Z"
                    fill="black"
                />
                <path
                    d="M89.0446 101.335C84.3457 104.43 84.5749 112.911 89.2738 116.005C93.0559 118.526 97.2964 117.266 100.047 112.681C102.454 108.785 102.225 105.805 99.1301 102.367C97.411 100.418 91.3368 99.7307 89.0446 101.335ZM95.9211 107.524C96.7234 108.899 96.6087 109.931 95.5773 111.191C93.5143 113.598 92.3683 113.484 90.8783 110.618C89.8469 108.899 89.9615 107.868 90.993 106.607C92.5975 104.659 94.202 105.003 95.9211 107.524Z"
                    fill="black"
                />
                <path
                    d="M69.2174 115.202C65.8937 118.525 66.1229 123.912 69.6758 127.35C72.9994 130.788 76.3231 131.018 79.4175 127.923C82.6265 124.714 83.5434 120.015 81.595 116.577C79.3029 112.566 72.541 111.878 69.2174 115.202ZM77.6984 119.901C78.386 122.193 76.6669 125.631 74.7185 125.631C74.2601 125.631 72.9994 124.829 72.0826 123.797C70.7073 122.422 70.5927 121.505 71.3949 119.786C72.9994 116.921 76.7815 117.035 77.6984 119.901Z"
                    fill="black"
                />
                <path
                    d="M172.594 152.107C166.405 156.118 163.655 166.433 166.978 174.112C169.614 180.415 173.969 183.51 180.273 183.51C186.232 183.51 190.358 180.759 193.567 174.685C195.63 170.674 195.63 161.963 193.453 157.723C189.327 149.815 180.044 147.294 172.594 152.107ZM186.003 160.015C189.556 163.568 189.212 171.705 185.315 174.8C181.648 177.665 179.356 177.779 176.032 175.487C172.594 173.08 171.563 167.006 173.855 162.536C176.605 157.265 182.106 156.118 186.003 160.015Z"
                    fill="black"
                />
                <path
                    d="M180.044 163.108C177.637 164.254 176.835 165.629 176.835 167.921C176.835 172.506 180.044 173.423 183.367 169.87C186.347 166.546 186.576 165.744 184.628 163.337C183.367 161.733 182.68 161.733 180.044 163.108Z"
                    fill="black"
                />
                <path
                    d="M110.821 196.804C103.142 198.982 97.7555 208.265 99.36 216.631C100.391 221.903 105.893 228.207 110.935 229.926C116.093 231.645 121.594 229.238 125.949 223.508C128.7 219.955 129.273 218.121 129.273 212.735C129.158 201.045 120.906 193.939 110.821 196.804ZM118.385 204.712C122.74 207.119 123.657 217.663 119.646 221.101C116.207 224.196 113.228 224.425 110.019 221.789C105.778 218.465 105.663 210.443 109.789 206.431C112.769 203.337 115.061 202.879 118.385 204.712Z"
                    fill="black"
                />
                <path
                    d="M143.882 172.916C136.204 175.093 130.817 184.376 132.422 192.743C133.453 198.015 138.954 204.318 143.997 206.037C149.154 207.756 154.656 205.35 159.011 199.619C161.761 196.066 162.334 194.233 162.334 188.846C162.22 177.156 153.968 170.05 143.882 172.916ZM151.446 180.824C155.802 183.23 156.718 193.774 152.707 197.213C149.269 200.307 146.289 200.536 143.08 197.9C138.84 194.577 138.725 186.554 142.851 182.543C145.831 179.448 148.123 178.99 151.446 180.824Z"
                    fill="#FF9363"
                />
                <path
                    d="M110.591 208.951C109.331 211.358 110.018 214.109 112.196 215.369C113.113 215.828 113.8 217.318 113.8 218.464C113.8 219.724 114.488 220.756 115.405 220.756C117.582 220.756 118.728 218.808 117.582 216.974C117.124 216.286 116.665 213.765 116.665 211.587C116.665 208.378 116.207 207.461 114.144 207.232C112.654 207.003 111.279 207.691 110.591 208.951Z"
                    fill="black"
                />
                <path
                    d="M144.8 186.94C143.539 189.346 144.227 192.097 146.404 193.358C147.321 193.816 148.732 192.657 149.186 192.211C149.641 191.765 149.186 192.208 149.186 192.208C149.186 192.208 150.874 191.753 150.874 189.576C150.874 186.367 150.415 185.45 148.353 185.22C146.863 184.991 145.487 185.679 144.8 186.94Z"
                    fill="#FF9363"
                />
            </svg>
        </div>
    );
};

export default Home;
