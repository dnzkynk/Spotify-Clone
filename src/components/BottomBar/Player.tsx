import { useAudio } from "react-use";
import { secondsToTime } from "../../utils";
import Range from "../Range";
import { Icon } from "../../images/icons/Icons";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setControls, setPlaying, setSideBar } from "../../stores/Player";

export default function Player() {
  const dispatch = useDispatch();
  const { current, sidebar } = useSelector((state: any) => state?.player);

  const [audio, state, controls] = useAudio({
    src: current?.src,
  });

  useEffect(() => {
    controls?.play();
  }, [current]);

  useEffect(() => {
    dispatch(setPlaying(state?.playing));
  }, [state?.playing]);

  useEffect(() => {
    dispatch(setControls(controls));
  }, []);

  const volumeIcon = useMemo(() => {
    if (state?.volume === 0 || state?.muted) return "volumeMuted";
    if (state?.volume <= 0.33) return "volumeLow";
    if (state?.volume <= 0.66) return "volumeNormal";
    if (state?.volume <= 1) return "volumeFull";

    return "volumeFull";
  }, [state?.volume, state?.muted]);

  const volume = state?.muted ? 0 : state?.volume;
  return (
    <div className="  flex px-4 justify-between items-center h-full">
      <div className="min-w-[11.25rem] w-[30%] ">
        {current && (
          <div className="flex items-center">
            <div className="flex items-center mr-3">
              {!sidebar && (
                <div className="w-14 h-14 mr-3 relative group flex-shrink-0">
                  <img src={current.image} />
                  <button
                    onClick={() => dispatch(setSideBar(true))}
                    className="w-5 h-5 rounded-full  top-1 right-1 opacity-0  bg-black group-hover:opacity-60 hover:!opacity-100 hover:scale-[1.06]  flex items-center absolute  justify-center"
                  >
                    <Icon name="upSide" size="14" />
                  </button>
                </div>
              )}
              <div>
                <h6 className="text-sm line-clamp-1">{current.title}</h6>
                <p className="text-[0.688rem] text-white text-opacity-70">
                  {current.singer}
                </p>
              </div>
            </div>
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon name="heart" size="16" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon name="pictureInPicture" size="16" />
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center max-w-[45.125rem] pt-2 px-4 w-[40%]">
        <div className="flex items-center gap-x-2">
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="shuffle" size="16" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="playerPrev" size="16" />
          </button>
          <button
            onClick={controls[state?.paused ? "play" : "pause"]}
            className="w-8 h-8  flex items-center justify-center text-black bg-white rounded-full hover:scale-[1.05]"
          >
            <Icon name={state?.playing ? "pause" : "play"} size="16" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="playerNext" size="16" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="repeat" size="16" />
          </button>
        </div>
        <div className="w-full flex items-center mt-1.5 gap-x-2">
          {audio}
          <div className="text-[0.688rem] text-white text-opacity-70 ">
            {secondsToTime(state?.time)}
          </div>
          <div className="w-[39.125rem] max-w-full">
            <Range
              values={[state?.time]}
              step={0.1}
              min={0}
              max={state?.duration || 1}
              onChange={(values) => controls?.seek(values[0])}
            />
          </div>

          <div className="text-[0.688rem] text-white text-opacity-70 ">
            {secondsToTime(state?.duration)}
          </div>
        </div>
      </div>
      <div className="min-w-[11.25rem] w-[30%] flex items-center justify-end">
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon name="lyrics" size="16" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon name="queue" size="16" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon name="device" size="16" />
        </button>
        <button
          onClick={() => controls[state?.muted ? "unmute" : "mute"]()}
          className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
        >
          <Icon name={volumeIcon} size="16" />
        </button>
        <div className="w-[5.813rem] max-w-full">
          <Range
            values={[volume]}
            step={0.01}
            min={0}
            max={1}
            onChange={(values) => {
              controls.unmute();
              controls?.volume(values[0]);
            }}
          />
        </div>

        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon name="fullscrean" size="16" />
        </button>
      </div>
    </div>
  );
}
