import type { NextPage } from "next";
import styles from "./frame-component1.module.css";
import { signIn } from "next-auth/react";
import { FormEvent } from "react";
import { useRouter } from "next/router";

const FrameComponent1: NextPage = () => {
  const router = useRouter();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };

    const email = target.email.value;
    const password = target.password.value;

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    console.log(result);

    if (result?.error) {
      // Handle error messages here
      console.error(result.error);
    } else if (result?.ok) {
      // Redirect to the school page if successful
      router.push("/school-page");
    }
  };

  return (
    <section className={styles.landingPageInner}>
      <div className={styles.logo21Parent}>
        <img
          className={styles.logo21}
          loading="lazy"
          alt=""
          src="/logo-2-1@2x.png"
        />
        <div className={styles.frameWrapper}>
          <div className={styles.cardHeaderInstanceParent}>
            <div className={styles.cardHeaderInstance}>
              <h1
                className={styles.loremIpsumDolor}
              >{`Lorem ipsum dolor sit amet, consectetur `}</h1>
              <div
                className={styles.loremIpsumDolor1}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse `}</div>
            </div>
            <div className={styles.formField}>
              <div className={styles.container}>
                <div className={styles.cardheader}>
                  <div className={styles.content}>
                    <h3 className={styles.header}>Log In</h3>
                    <div className={styles.subheader}>Get started for free</div>
                  </div>
                  <div className={styles.iconbutton}>
                    <div className={styles.icon}>
                      <img
                        className={styles.starsharpIcon}
                        alt=""
                        src="/starsharp.svg"
                      />
                    </div>
                  </div>
                </div>
                <form className={styles.cardContent} onSubmit={handleSubmit}>
                  <div className={styles.form}>
                    <div className={styles.textfield}>
                      <div className={styles.input}>
                        <input
                          className={styles.content1}
                          placeholder="Username"
                          type="email"
                          id="email"
                          autoComplete="off"
                          name="email"
                          required
                        />
                      </div>
                      <div className={styles.formhelpertext}>
                        <div className={styles.helperText}>Helper text</div>
                      </div>
                    </div>
                    <div className={styles.textfield1}>
                      <div className={styles.input1}>
                        <input
                          className={styles.content2}
                          placeholder="Password"
                          type="password"
                          id="password"
                          name="password"
                          required
                        />
                      </div>
                      <div className={styles.formhelpertext1}>
                        <div className={styles.helperText1}>Helper text</div>
                      </div>
                    </div>
                  </div>
                  <button className={styles.button} type="submit">
                    <div className={styles.base}>
                      <img
                        className={styles.maskedIcon}
                        alt=""
                        src="/masked-icon.svg"
                      />
                      <div className={styles.logIn}>log in</div>
                      <img
                        className={styles.maskedIcon1}
                        alt=""
                        src="/masked-icon.svg"
                      />
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
